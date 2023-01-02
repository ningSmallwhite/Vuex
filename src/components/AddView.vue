<template>
  <div>
     <!-- 访问state中的数据，第一种方法 -->
      <!-- 当前最新的count值为:{{$store.state.count}} -->
    <h3>{{$store.getters.showNuber}}</h3>
    <button @click="addBut">+1</button>
    <button @click="addN">+N</button>
    <button @click="asyncAdd">延迟一秒+1</button>
    <button @click="asyncAddN">传递参数</button>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    addBut(){
      // commit 的作用就是调用某个mutations函数（第一中方式）
      this.$store.commit('add')
    },
    addN(){
      this.$store.commit('addN',2)
    },
    asyncAdd() {
      this.$store.dispatch('async1')
    },
    asyncAddN() {
      this.$store.dispatch('addNasync',5)
    }
  }
}
</script>