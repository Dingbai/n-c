<template>
  <div class="i-menu" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'iMenu',
  props: {
    mode: { type: String, default: 'horizontal' },
    width: { type: String, default: '250px' }
  }
}
</script>
<style lang="less" scoped>
@import url('./menu.less');
</style>
