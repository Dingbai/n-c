<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">form</router-link>
      <router-link to="/checkbox">checkbox</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
  @import '~@/assets/style/reset.less';
</style>

<style lang="less" scoped>
  @import '~@/assets/style/app.less';
</style>
