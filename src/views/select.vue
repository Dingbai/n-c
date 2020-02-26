<template>
  <div>
    <i-select placeholder="select plaease !">
      <transition name="slide-fade">
        <i-select-item :data="selectData" v-show="isShow"></i-select-item>
      </transition>
    </i-select>
    <div>
      [参考](https://juejin.im/post/5b03e610f265da0b873ad64e)
    </div>
  </div>
</template>

<script>
// todo 过渡效果未完成
import iSelect from '@/components/select/select'
import iSelectItem from '@/components/select/select-item'
export default {
  data() {
    return {
      selectData: [
        {
          list: 'list'
        },
        {
          list: 'youtube'
        },
        {
          list: 'tencent'
        },
        {
          list: 'alibaba'
        },
        {
          list: 'aiqiyi'
        }
      ],
      isShow: true
    }
  },
  components: { iSelect, iSelectItem }
}
</script>
<style lang="less" scoped>
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
