<template>
  <input type="text" @input="change" :value="currentValue" />
</template>

<script>
  export default {
    name: 'iInput',
    props: {
      value: {
        type: String
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    methods: {
      change(event) {
        let value = event.target.value

        this.$emit('input', value)
      },
      updateValue() {
        this.currentValue = this.value
      }
    },

    watch: {
      value(val) {
        if (val) {
          this.updateValue()
        }
      }
    }
  }
</script>
