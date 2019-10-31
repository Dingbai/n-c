<template>
  <div id="main" class="container" style="color: red">
    <book-list :books="books">
      <template v-for="slotProps in books" slot-scope="{book}">
        {{ book.sale }}
        {{ book.name }}
      </template>
    </book-list>
  </div>
</template>
<script>
  import BookList from '@/components/test/test.vue'
  export default {
    components: { BookList },
    data() {
      return {
        books: [
          {
            sale: 'hello',
            name: 'world'
          },
          {
            sale: 'hi',
            name: 'world'
          }
        ]
      }
    }
  }
</script>
