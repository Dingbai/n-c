<template>
  <ul class="i-menu-item">
    <li v-for="(item, index) in itemData" :key="index">{{ item }}</li>
  </ul>
</template>
<script>
export default {
  props: {
    isShow: { type: Boolean },
    itemData: { type: Array }
  }
}
</script>
