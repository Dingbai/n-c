<template>
  <ul>
    <li>
      tttttttt
      我是 t
    </li>
  </ul>
</template>

<script>
  import { findComponentUpward } from '@/utils/test.js'
  import Emitter from '@/mixins/test.js'
  import { findBrothersComponents } from '@/utils/assist.js'
  export default {
    name: 't1',
    mixins: [Emitter],
    mounted() {
      // let t = findBrothersComponents(this, 't1', false)
      // this.$emit('accept', 'hello world')
      this.dispatch()
      // let test = findBrotherComponents(this, 'test')
      // console.log(test)
      // findBrotherComponents(this, 'test', 'hello test')
      // this.$on('to-brother', data => {
      //   console.log('????')
      //   console.log(data)
      // })
      // let c = findComponentUpward(this, 'test')

      console.log(c)
    }
  }
</script>
