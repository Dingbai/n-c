<template>
  <ul>
    <li v-for="book in books" :key="book.id">
      <!-- <slot :book="book">
        {{ book.name }}
      </slot> -->
      <t1>
        test t1 i want to test
      </t1>
    </li>
  </ul>
</template>

<script>
import { findBrother, findComponentUpward } from '@/utils/test.js'
import { findBrothersComponents } from '@/utils/assist.js'
import t1 from '@/components/test/t1.vue'
import Emitter from '@/mixins/test.js'
export default {
  name: 'test',
  mixins: [Emitter],
  components: { t1 },
  props: {
    books: Array
  },
  inject: ['author'],
  mounted() {
    // let c = findComponentUpward(this, 'iRadio')
    // console.log(c)
    this.$on('emit-data-test', data => {
      console.log('enter?');
      console.log(data)
    })
    this.broadcast('t1', 'emit-data-t1', 'test-to-t1')
  }
}
</script>
