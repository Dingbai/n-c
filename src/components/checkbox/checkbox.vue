<template>
  <label>
    <input
      v-if="group"
      v-model="model"
      type="checkbox"
      :disabled="disabled"
      :checked="currentValue"
      @change="change"
    />
    <input
      v-else
      type="checkbox"
      :disabled="disabled"
      :checked="currentValue"
      @change="change"
    />
    <slot></slot>
  </label>
</template>
<script>
  import { findComponentUpward } from '@/utils/assist.js'
  export default {
    name: 'iCheckbox',
    props: {
      label: {
        type: [String, Number, Boolean]
      },
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      trueValue: {
        type: [Boolean, String, Number],
        default: true
      },
      falseValue: {
        type: [Boolean, String, Number],
        default: false
      }
    },
    data() {
      return {
        currentValue: this.value,
        group: false,
        model: [],
        parent: null
      }
    },
    mounted() {
      this.parent = findComponentUpward(this, 'iCheckboxGroup')

      if (this.parent) {
        this.group = true
      }
      if (this.group) {
        this.parent.updateModel(true)
      } else {
        this.updateModel()
      }
    },
    methods: {
      change(event) {
        if (this.disabled) return false

        const checked = event.target.checked

        this.currentValue = checked

        const value = checked ? this.trueValue : this.falseValue

        this.$emit('input', value)

        if (this.group) {
          this.parent.change(this.model)
        } else {
          console.log('change')
          this.$emit('on-change', value)
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
