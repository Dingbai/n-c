<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="cotent">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '~@/assets/style/app.less';
</style>
