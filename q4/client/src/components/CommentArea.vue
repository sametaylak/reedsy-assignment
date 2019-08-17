<template>
  <div class="comment-area">
    <h2>Comments</h2>
    <CommentList :comments="comments"/>
    <div class="comment-input-area">
      <h3>Leave a Comment</h3>
      <textarea rows="10" placeholder="Message.."/>
      <button>Submit</button>
    </div>
  </div>
</template>

<script>
import CommentList from '@/components/CommentList'

export default {
  name: 'CommentArea',
  components: {
    CommentList
  },
  props: {
    comments: Array
  }
}
</script>

<style lang="scss" scoped>
.comment-area {
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
  .comment-input-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    textarea {
      width: 50%;
      border: 1px solid #ececec;
      border-radius: 6px;
      background: #ececec;
      outline: none;
      padding: 8px 10px;
      font-size: 14px;
      &:focus {
        border-color: #ebc02a;
      }
    }
    button {
      margin-top: 16px;
      cursor: pointer;
      border: 1px solid #ebc02a;
      border-radius: 6px;
      background: none; 
      outline: none;
      color: #ebc02a;
      width: 100px;
      padding: 6px 8px;
      margin: 16px 0;
      &:hover {
        background: #ebc02a; 
        color: white;
      }
    }
  }
}
</style>
