<template>
  <div class="pagination">
    <button class="prevPageButton" @click="prevPage" :disabled="prevPageDisableCondition">Prev</button>
    <button class="nextPageButton" @click="nextPage" :disabled="nextPageDisableCondition">Next</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    prevPage: {
      type: Function,
      required: true
    },
    nextPage: {
      type: Function,
      required: true
    },
    prevPageDisableCondition: {
      type: Boolean,
    },
    nextPageDisableCondition: {
      type: Boolean,
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 16px 0;
  button {
    cursor: pointer;
    border: 1px solid #ebc02a;
    border-radius: 6px;
    background: none; 
    outline: none;
    color: #ebc02a;
    width: 100px;
    padding: 6px 8px;
    margin: 0 8px;
    &:hover {
      background: #ebc02a; 
      color: white;
    }
    &:disabled {
      border: none;
      background: #cccccc; 
      color: gray;
    }
  }
}
</style>
