<template>
  <div class="i-menu-group">
    <h3 class="i-menu-group-title" @click="handleClick">
      <p>
        <slot name="title"></slot>
      </p>
      <i class="iconfont icon-check-circle"></i>
    </h3>
    <template v-if="isShow">
      <transition name="slide-fade">
        <slot></slot>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: 'iMenuGroup',
  props: {
    // mode: { type: String, default: 'vertical' },
    width: { type: String, default: '250px' }
  },
  data() {
    return {
      groupName: 'navigation one',
      isShow: false
    }
  },
  methods: {
    handleClick() {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./menu.less');
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
