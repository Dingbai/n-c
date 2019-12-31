<template>
  <ul>
    <li>
      <slot></slot>
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
    this.dispatch('test', 'emit-data-test', 't1-to-test')

    // let t = findBrothersComponents(this, 't1', false)
    // this.$emit('accept', 'hello world')
    // let test = findBrotherComponents(this, 'test')
    // console.log(test)
    // findBrotherComponents(this, 'test', 'hello test')
    // this.$on('to-brother', data => {
    //   console.log('????')
    //   console.log(data)
    // })
    // let c = findComponentUpward(this, 'test')

    // console.log(c)
  },
  created() {
    this.$on('emit-data-t1', data => {
      console.log(data)
    })
  }
}
</script>
