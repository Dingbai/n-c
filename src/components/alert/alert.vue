<template>
  <div class="alert">
    <div class="alert-main" v-for="item in notices" :key="item.name">
      <div class="alert-content">
        {{ item.content }}
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

        setTimeout(() => {
          this.remove(name)
        }, config.duration * 1000)
      },
      remove(name) {
        let notices = this.notices
        for (let i = 0, len = notices.length; i < len; i++) {
          let notice = notices[i]
          if (notice.name === name) {
            console.log('enter?')
            this.notices.splice(i, 1)
            break
          }
        }
      }
    }
  }
</script>

<style>
  .alert {
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    pointer-events: none;
  }
  .alert-content {
    display: inline-block;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
  }
</style>
