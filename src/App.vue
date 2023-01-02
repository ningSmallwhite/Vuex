<template>
  <div id="app">
    <HelloWorld/>
    <Add></Add>
    <p>-------------------</p>
    <Sub></Sub>
    <p>-------------------</p>
    <Case></Case>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Add from './components/AddView'
import Sub from './components/SubtractionView'
import Case from './components/CaseView'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Add,
    Sub,
    Case
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
