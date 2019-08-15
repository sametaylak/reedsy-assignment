<template>
  <div class="books">
    <h1>Top Books of All Time</h1>
    <BookList :list="books"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import BookList from '@/components/BookList'

export default {
  name: 'Books',
  components: {
    BookList
  },
  async mounted () {
    if (this.books.length === 0) {
      await this.fetchBooks()
    }
  },
  computed: {
    ...mapGetters([
      'books'
    ])
  },
  methods: {
    ...mapActions([
      'fetchBooks'
    ])
  }
}
</script>
