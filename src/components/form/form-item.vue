<template>
  <label>
    <span :class="{ 'i-form-item-label-required': isRequired }" v-if="label">
      {{ label }} :
    </span>
    <div>
      <slot></slot>
      <div v-if="validateState === 'error'" class="i-form-item-message">
        {{ validateMessage }}
      </div>
    </div>
  </label>
</template>

<script>
  import Emitter from '@/mixins/emitter.js'
  import AsyncValidator from 'async-validator'

  export default {
    name: 'iFormItem',
    props: {
      label: {
        type: String,
        default: ''
      },
      prop: {
        type: String
      }
    },
    mixins: [Emitter],
    inject: ['form'],
    data() {
      return {
        isRequired: false,
        validateState: '',
        validateMessage: ''
      }
    },
    computed: {
      fieldValue() {
        return this.form.model[this.prop]
      }
    },
    mounted() {
      if (this.prop) {
        this.dispatch('iForm', 'on-form-item-add', this)

        this.initialValue = this.fieldValue
        this.setRules()
      }
    },
    beforeDestroy() {
      this.dispatch('iForm', 'on-form-item-remove', this)
    },
    methods: {
      setRules() {
        let rules = this.getRules()
        if (rules.length) {
          rules.every(rule => {
            this.isRequired = rule.required
          })
        }

        this.$on('on-form-change', this.onFieldChange)
        this.$on('on-form-blur', this.onFieldBlur)
      },
      onFieldBlur() {
        this.validate('blur')
      },
      onFieldChange() {
        this.validate('change')
      },
      resetField() {
        this.validateState = ''
        this.validateMessage = ''
        this.form.model[this.prop] = this.initialValue
      },
      getRules() {
        let formRules = this.form.rules
        formRules = formRules ? formRules[this.prop] : []
        return [].concat(formRules || [])
      },
      getFilteredRule(trigger) {
        const rules = this.getRules()
        return rules.filter(
          rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
        )
      },
      validate(trigger, callback = function() {}) {
        let rules = this.getFilteredRule(trigger)
        if (!rules || rules.length === 0) {
          return true
        }

        this.validateState = 'validating'

        // 调用 async-validator 方法
        let descriptor = {}
        descriptor[this.prop] = rules

        const validator = new AsyncValidator(descriptor)
        let model = {}

        model[this.prop] = this.fieldValue
        validator.validate(model, { firstFields: true }, errors => {
          this.validateState = !errors ? 'success' : 'error'
          this.validateMessage = errors ? errors[0].message : ''
          callback(this.validateMessage)
        })
      }
    }
  }
</script>

<style scoped>
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>
