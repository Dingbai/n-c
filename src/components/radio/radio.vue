<template>
  <label>
    <input
      type="radio"
      :disabled="disabled"
      :checked="currentValue"
      :name="groupName"
      :value="currentValue"
      @change="change"
    />
    <slot>{{ label }}</slot>
  </label>
</template>

<script>
  import { findComponentUpward } from '@/utils/assist.js'
  export default {
    name: 'iRadio',
    props: {
      label: {
        type: [Boolean, Number, String]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Boolean, Number, String],
        default: false
      },
      trueValue: {
        type: [Boolean, Number, String],
        default: true
      },
      falseValue: {
        type: [Boolean, Number, String],
        default: false
      },
      name: {
        type: String
      }
    },
    data() {
      return {
        currentValue: this.value,
        group: false,
        parent: findComponentUpward(this, 'iRadioGroup'),
        groupName: this.name
      }
    },
    mounted() {
      if (this.parent) {
        this.group = true
        if (this.name && this.name !== this.parent.name) {
          if (console.warn) {
            console.warn('[iview] Name does not match Radio Group name.')
          }
        } else {
          this.groupName = this.parent.name
        }
      }

      if (this.group) {
        this.parent.updateModel()
      } else {
        this.updateModel()
      }
    },
    methods: {
      change(event) {
        if (this.disabled) return false

        let checked = event.target.checked
        let value = checked ? this.trueValue : this.falseValue

        this.currentValue = checked
        this.$emit('input', value)

        if (this.parent) {
          if (this.label !== undefined) {
            this.parent.change({
              value: this.label,
              checked: this.currentValue
            })
          } else {
            this.$emit('on-change', value)
          }
        }
      },
      updateModel() {
        this.currentValue = this.value === this.trueValue
      }
    },
    watch: {
      value(val) {
        if (val === this.trueValue || val === this.falseValue) {
          this.updateModel()
        } else {
          throw 'Value should be trueValue or falseValue'
        }
      }
    }
  }
</script>
