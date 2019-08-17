<template>
  <div class="comment-list-item">
    <img :src="`https://placeimg.com/300/300/people?now=${Date.now()}`" />
    <p>{{ comment.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: Object
  }
}
</script>

<style lang="scss" scoped>
.comment-list-item {
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
</style>
