<template>
  <div class="books">
    <h1>Top Books of All Time</h1>
    <div class="search">
      <input v-model="query" type="text" placeholder="Search.."/>
    </div>
    <BookList :list="filteredBooks"/>
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
  data () {
    return {
      query: ''
    }
  },
  async mounted () {
    if (this.books.length === 0) {
      await this.fetchBooks()
    }
  },
  computed: {
    ...mapGetters([
      'books'
    ]),
    filteredBooks () {
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(this.query.toLowerCase()) ||
          book.synopsis.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions([
      'fetchBooks'
    ])
  }
}
</script>

<style lang="scss" scoped>
.books {
  .search {
    display: flex;
    margin: 16px 8px;
    justify-content: flex-end;
  }
}
</style>
