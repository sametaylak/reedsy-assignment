<template>
  <div class="book-list">
    <BookItem v-for="(book, index) in list" :order="index" :book="book" :key="book.slug"/>
  </div>
</template>

<script>
import BookItem from '@/components/BookItem'

export default {
  name: 'BookList',
  components: {
    BookItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.book-list {
  .book-item:not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
