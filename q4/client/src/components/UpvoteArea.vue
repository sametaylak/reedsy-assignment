<template>
  <div class="upvote-area">
    <span>Upvoted {{ book.upvotes }} times</span>
    <button :class="{ upvoted: book.upvoted, upvote: !book.upvoted }">
      {{ book.upvoted ? 'Upvoted' : 'Upvote' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'UpvoteArea',
  props: {
    book: Object
  }
}
</script>

<style lang="scss" scoped>
.upvote-area {
  span {
    margin-right: 16px;
  }
  button {
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    padding: 4px 8px;
    font-size: 14px;
    &.upvote {
      border: none;
      color: white;
      background-color: #ebc02a; 
    }
    &.upvoted {
      border: 1px solid #ebc02a;
      color: #ebc02a;
    }
  }
}
</style>
