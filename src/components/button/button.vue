<template>
  <button :type="type" :class="classType + 'button'">
    <slot>
      {{ type }}
    </slot>
  </button>
</template>
<script>
export default {
  name: 'iButton',
  props: {
    type: {
      type: String,
      validator(value) {
        return ['success', 'warning', 'danger', 'default'].indexOf(value) !== 1
      },
      default: 'default'
    }
  },
  computed: {
    classType() {
      return `${this.type}-button `
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./button.less');
</style>
