<template>
  <div class="i-menu-group">
    <h3 class="i-menu-group-title" @click="handleClick">
      <slot name="title"></slot>
      <i
        class="iconfont icon-check-circle arrow"
        :class="direction ? 'direction-fornt' : 'direction-back'"
      ></i>
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
    width: { type: String, default: '250px' }
  },
  data() {
    return {
      direction: false,
      isShow: false
    }
  },
  methods: {
    handleClick() {
      this.direction = !this.direction
      this.isShow = !this.isShow
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./menu.less');
.direction-fornt {
  transform: rotate(180deg);
  transition: all 0.3s;
}
.direction-back {
  transition: all 0.3s;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
