<template>
  <div id="main" class="container" style="color: red">
    <book-list :books="books">
      <template v-for="slotProps in books" slot-scope="{book}">
        {{ book.sale }}
        {{ book.name }}
      </template>
    </book-list>
    <!-- <book-list :books="books">
      <template v-for="slotProps in books" slot-scope="{book}">
        {{ book.sale }}
        {{ book.name }}
      </template>
    </book-list>

    <input type="text" v-model="name" /> -->
  </div>
</template>
<script>
  import BookList from '@/components/test/test.vue'
  import t1 from '@/components/test/t1.vue'

  export default {
    components: { t1, BookList },
    provide() {
      return {
        author: this.name
      }
    },
    data() {
      return {
        name: { age: 10 },
        books: [
          {
            sale: 'hello',
            name: 'world'
          }
        ]
      }
    },
    computed: {
      change() {
        // console.log(this.name)
        return this.name
      }
    },
    methods: {
      getProvide() {
        this.name.age = '李四'
      }
    },
    created() {
      // console.log(this.author)
      // console.log(this.name)
      // console.log('------')
      this.name.age = '李四'
    }
  }
</script>
