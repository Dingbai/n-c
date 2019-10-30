<template>
  <div>
    <h3 class="test-title">alert组件</h3>
    <button @click="handleOpen1">打开提示 1</button>
    <button @click="handleOpen2">打开提示 2</button>
    <button @click="handleOpen3">success</button>
    <button @click="handleOpen4">info</button>
    <button @click="handleOpen5">warning</button>
    <button @click="handleOpen6">error</button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen1() {
        this.$Alert.open({
          content: '我是提示信息 1',
          duration: 0
        })
      },
      handleOpen2() {
        this.$Alert.open({
          content: '我是提示信息 2',
          duration: 2000,
          render: h => {
            return h('span', [
              'This is created by ',
              h('a', 'render'),
              ' function'
            ])
          }
        })
      },
      handleOpen3() {
        this.$Alert.success({
          content: 'success',
          duration: 2
        })
      },
      handleOpen4() {
        this.$Alert.info({
          content: 'info',
          duration: 2
        })
      },
      handleOpen5() {
        this.$Alert.warning({
          content: 'warning',
          duration: 2
        })
      },
      handleOpen6() {
        this.$Alert.error({
          content: 'error',
          duration: 2
        })
      }
    }
  }
</script>
