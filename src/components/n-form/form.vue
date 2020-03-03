<template>
  <form class="n-form">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 'nForm',
  props: {
    model: { type: Object, default: () => {} },
    rules: { type: Array, default: () => [] },
    inline: { type: Boolean, default: false },
    size: {
      type: String,
      validator: value => {
        return ['large', 'normal', 'small'].indexOf(value) !== -1
      },
      default: 'normal'
    },
    labelWidth: { type: String }
  },
  computed: {
    changeModel: {
      get() {
        return this.model
      },
      set(val) {
        this.$emit('update:model', val)
      }
    }
  },
  methods: {
    resetForm() {
      for (let key in this.changeModel) {
        this.changeModel[key] = ''
      }
    }
  }
}
</script>
