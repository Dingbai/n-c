<template>
  <div class="i-select">
    <label class="i-select-input" @click.stop="setSelect">
      <input type="hidden" />
      <span :class="classes">{{ selectItem }}</span>
      <i class="iconfont icon-CI"></i>
    </label>
    <!-- <transition name="slide-fade"> -->
    <slot></slot>
    <!-- </transition> -->
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
export default {
  name: 'iSelect',
  mixins: [Emitter],
  props: {
    placeholder: { type: String, default: '请选择' }
  },
  data() {
    return {
      isSelect: false,
      selectItem: this.placeholder
    }
  },

  computed: {
    classes() {
      return [{ 'i-select-border': this.isSelect }]
    }
  },
  created() {
    this.$on('on-set-select', data => {
      this.isSelect = data
    })
    this.$on('on-set-item', data => {
      this.selectItem = data
    })
    // document.addEventListener('click', () => {
    //   this.broadcast('iSelectItem', 'on-handle-select', false)
    // })
  },

  methods: {
    setSelect() {
      let flag = !this.isSelect
      this.broadcast('iSelectItem', 'on-handle-select', flag)
    }
  }
}
</script>
<style lang="less" scoped>
@import url('./select.less');
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
