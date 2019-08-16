<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  width: 83.33%;
}

input[type=text] {
  border: 1px solid #cccccc;
  border-radius: 4px;
  padding: 4px 6px;
  font-size: 14px;
  background: none;
  outline: none;
}
</style>
