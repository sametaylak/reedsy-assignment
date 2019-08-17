<template>
  <div class="comment-list">
    <CommentItem :comment="comment" v-for="(comment, index) in comments" :key="index"/>
  </div>
</template>

<script>
import CommentItem from '@/components/CommentItem'

export default {
  name: 'CommentList',
  components: {
    CommentItem
  },
  props: {
    comments: Array
  }
}
</script>

<style lang="scss" scoped>
.comment-list {
  margin-left: 16px;
  &-item {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    p {
      padding: 8px 16px;
      margin-left: 16px;
      background: #cccccc;
      border-radius: 6px;
    }
  }
}
</style>
