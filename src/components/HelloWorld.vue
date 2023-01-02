<template>
  <div class="hello">
    <strong>vuex概述:</strong>
    <ul>
      <li>vuex是实现组件全局状态管理的一种机制，可以方便实现组件之间数据的共享。</li>
      <li>只有mutations中定义的函数，才有权力修改state中的数据</li>
      <li>不能在mutations函数中执行异步操作</li>
      <li>在actions中，不能直接修改state中的数据，必须通过xxx.commit()触发某个mutation才行</li>
      <li>this.$store.dispatch触发actions中的某个函数</li>
      <li>getters用于对store中的数据进行加工处理形成新的数据，类似与计算属性</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  // list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
