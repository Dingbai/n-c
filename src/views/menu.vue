<template>
  <div>
    <i-menu mode="vertical">
      <i-menu-group>
        <template v-slot:title>
          <i class="iconfont icon-check-circle"></i>
          <span>早啊</span>
        </template>
        <i-menu-item :itemData="itemData"></i-menu-item>
      </i-menu-group>
      <i-menu-group>
        <template v-slot:title>
          <i class="iconfont icon-check-circle"></i>
          <span>不早了</span>
        </template>
        <i-menu-item :itemData="itemData1"></i-menu-item>
      </i-menu-group>
    </i-menu>
  </div>
</template>

<script>
import iMenu from '@/components/menu/menu.vue'
import iMenuGroup from '@/components/menu/menu-group.vue'
import iMenuItem from '@/components/menu/menu-item.vue'
export default {
  components: { iMenu, iMenuGroup, iMenuItem },
  data() {
    return {
      itemData: ['hello', '看我', '你在害怕', '什么???'],
      itemData1: ['yz', 'yz', '你在害怕', '什么???']
    }
  }
}
</script>
<style lang="less" scoped>
// @import url('./menu.less');
div {
  width: 100%;
}
</style>
