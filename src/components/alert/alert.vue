<template>
  <div class="alert">
    <div class="alert-main" v-for="item in notices" :key="item.name">
      <div class="alert-icon iconfont " :class="item.icon"></div>
      <div class="alert-content">
        <div class="alert-title">
          <h3 v-if="item.title">{{ item.title }}</h3>
          <h3 v-else>我是标题</h3>
          <span @click="remove(item.name)">停用</span>
        </div>
        <div class="alert-content">
          {{ item.render ? item.render : item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let seed = 0
  function getUuid() {
    return 'alert_' + seed++
  }
  export default {
    data() {
      return {
        notices: []
      }
    },
    methods: {
      add(config) {
        let name = getUuid()
        this.notices.push(Object.assign(config, { name }))

        // 如果 duration 为 0 则不会关闭 提示
        if (config.duration === 0) {
          return
        }
        console.log(config.render)
        setTimeout(() => {
          this.remove(name)
        }, config.duration * 1000)
      },
      remove(name) {
        let notices = this.notices
        for (let i = 0, len = notices.length; i < len; i++) {
          let notice = notices[i]
          if (notice.name === name) {
            this.notices.splice(i, 1)
            break
          }
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .alert {
    position: fixed;
    width: 200px;
    top: 50px;
    right: 21px;
    text-align: center;
  }
  .alert-main {
    display: flex;
    max-width: 200px;
    text-align: right;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
    font-size: 14px;
    text-align: left;
  }
  .alert-icon {
    margin-right: 10px;
    font-size: 20px;
    color: rgb(45, 140, 240);
  }
  .alert-content {
    flex: 1;
  }
  .alert-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .icon-info-circle {
    color: rgb(45, 140, 240);
  }
  .icon-check-circle {
    color: rgb(25, 190, 107);
  }
  .icon-warning-circle {
    color: rgb(255, 153, 0);
  }
  .icon-close-circle {
    color: rgb(237, 64, 20);
  }
  h3 {
    font-size: 14px;
    font-weight: 600;
  }
  span {
    color: #ddd;
    cursor: pointer;
  }
</style>
