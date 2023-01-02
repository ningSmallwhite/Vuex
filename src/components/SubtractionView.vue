<template>
  <div>
    <h3>{{showNuber}}</h3>
    <button @click="subBut">-1</button>
    <button @click="subN(2)">-N</button>
    <button @click="subAsync1">async-1</button>
  </div>
</template>
<script>
// 访问state中的数据，第二种方法
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNuber'])
  },
  methods: {
    ...mapMutations(['sub','subN']),
    subBut() {
      this.sub()
    },
    // subButN() {
    //   this.subN(2)
    // },
    ...mapActions(['subAsync1']),
    // subAsync() {
    //   this.subAsync1()
    // }
  }
}
</script>