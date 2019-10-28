<template>
  <input
    type="text"
    @blur="handleBlur"
    @input="handleChange"
    :value="currentValue"
  />
</template>

<script>
  import Emitter from '@/mixins/emitter.js'
  export default {
    name: 'iInput',
    props: {
      value: {
        type: String
      }
    },
    mixins: [Emitter],
    data() {
      return {
        currentValue: this.value
      }
    },
    methods: {
      handleChange(event) {
        let value = event.target.value

        this.currentValue = value
        this.$emit('input', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      },
      handleBlur() {
        this.dispatch('iFormItem', 'on-form-blur', this.currentValue)
      }
    },

    watch: {
      value(val) {
        if (val) {
          this.currentValue = val
        }
      }
    }
  }
</script>
