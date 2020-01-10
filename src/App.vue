<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">form</router-link>
      <router-link to="/checkbox">checkbox</router-link>
      <router-link to="/radio">radio</router-link>
      <router-link to="/alert">alert</router-link>
      <router-link to="/table-render">table-render</router-link>
      <router-link to="/table-slot">table-slot</router-link>
      <router-link to="/tree">tree</router-link>
      <router-link to="/select">select</router-link>
      <router-link to="/menu">menu</router-link>
      <router-link to="/button">button</router-link>
      <router-link to="/test">test</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="less">
@import '~@/assets/style/reset.less';
@import '~@/assets/style/common.less';
</style>

<style lang="less" scoped>
@import '~@/assets/style/app.less';
</style>
