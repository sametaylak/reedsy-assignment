<template>
  <div class="book-item" v-if="book">
    <img class="book-cover" :src="book.cover" @click="goToDetail"/>
    <div class="book-item-info">
      <h2 class="title" @click="goToDetail">{{ order + 1}}. {{ book.title }}</h2>
      <span class="author">{{ book.author }}</span>
      <p class="synopsis">{{ book.synopsis | truncate(200, '...') }}</p>
      <UpvoteArea :book="book"/>
    </div>
  </div>
</template>

<script>
import UpvoteArea from '@/components/UpvoteArea'

export default {
  name: 'BookItem',
  components: {
    UpvoteArea
  },
  props: {
    order: Number,
    book: Object
  },
  methods: {
    goToDetail () {
      this.$router.push({
        name: 'BookDetail',
        params: { slug: this.book.slug }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.book-item {
  display: flex;
  &-info {
    margin-left: 16px;
    .title {
      cursor: pointer;
      margin: 0;
    }
    .author {
      font-style: italic;
    }
    .upvote-area {
      float: right;
    }
  }
  img {
    cursor: pointer;
    border-radius: 6px;
    width: 10%;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    img {
      display: block;
      margin: 0 auto;
      width: 50%;
    }
  }
}
</style>
