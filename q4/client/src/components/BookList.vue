<template>
  <div class="book-list">
    <BookItem v-for="(book, index) in paginatedData" :order="index + (page * perPage)" :book="book" :key="book.slug"/>
    <Pagination
      :prevPageDisableCondition="onFirstPage"
      :nextPageDisableCondition="onLastPage"
      :prevPage="prevPage"
      :nextPage="nextPage" />
  </div>
</template>

<script>
import BookItem from '@/components/BookItem'
import Pagination from '@/components/Pagination'
import paginate from '@/mixins/paginate'

export default {
  name: 'BookList',
  mixins: [
    paginate({ entity: 'list', perPage: 3 })
  ],
  components: {
    BookItem,
    Pagination
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
