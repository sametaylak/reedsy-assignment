<template>
  <div class="book-detail">
    <div class="book-detail-header">
      <div class="book-detail-header-left">
        <h1 class="title">{{ book.title }}</h1>
        <span class="author">{{ book.author }}</span>
      </div>
      <div class="book-detail-header-right">
        <UpvoteArea :book="book"/>
      </div>
    </div>
    <img class="book-detail-cover" :src="book.cover"/>
    <h2>Synopsis</h2>
    <p>
      {{ book.synopsis }}
    </p>
    <span><b>Rating:</b> {{ book.rating }}/10</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import UpvoteArea from '@/components/UpvoteArea'

export default {
  name: 'BookDetail',
  components: {
    UpvoteArea
  },
  data () {
    return {
      book: {}
    }
  },
  async mounted () {
    if (this.books.length === 0) {
      await this.fetchBooks()
    }
    this.book = this.getBookBySlug(this.$route.params.slug)
  },
  computed: {
    ...mapGetters([
      'books',
      'getBookBySlug'
    ])
  },
  methods: {
    ...mapActions([
      'fetchBooks'
    ])
  }
}
</script>

<style lang="scss" scoped>
.book-detail {
  &-header {
    display: flex;
    align-items: center;
    &-left {
      flex: 1;
      .title {
        margin: 0;
      }
    }
    &-right {
      .title {
        margin: 0;
      }
    }
  }
  &-cover {
    display: block;
    margin: 0 auto;
    border-radius: 6px;
  }
}
</style>
