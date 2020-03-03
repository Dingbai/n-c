<template>
  <input type="text" :value="changeValue" @blur="blurHandle" @input="change" />
</template>
<script>
export default {
  name: 'nInput',
  props: { value: { type: String } },
  data() {
    return {
      changeValue: this.value
    }
  },
  methods: {
    blurHandle() {
      // console.log('blur')
    },
    change(event) {
      this.changeValue = event.target.value
      
      this.$emit('input', this.changeValue)
    }
  }
}
</script>
