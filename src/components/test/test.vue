<template>
  <div>
    <p>咋回事呢</p>
    <!-- <ul>
      <li v-for="book in books" :key="book.id">
        <slot :book="book">
          {{ book.name }}
        </slot>
      </li>
    </ul> -->
    <t1>
      test t1 i want to test
    </t1>

    <router-link to="/t">i'm want to go t</router-link>
    <router-view />
  </div>
</template>

<script>
import { findBrother, findComponentUpward } from '@/utils/test.js'
import { findBrothersComponents } from '@/utils/assist.js'
import Emitter from '@/mixins/test.js'
import t1 from '@/components/test/t1.vue'
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
    this.broadcast('t1', 'test-handler', 'hello')
    // console.log(c)
  }
}
</script>
