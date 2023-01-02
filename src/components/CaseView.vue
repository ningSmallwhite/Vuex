<template>
  <div id="app">
    <!-- <input placeholder="请输入内容" class="my_ipt" :value="inputValue" @change="handleInput"></input> -->
    <input type="text" placeholder="请输入内容" class="my_ipt" :value="inputValue" @change="handleInput">
    <el-button type="primary" @click="addTolist">添加作品</el-button>
    <el-table ref="multipleTable" :data="list" tooltip-effect="dark" border style="width: 100%">
      <el-table-column prop="info" label="名称">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  created() {
    // this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list', 'inputValue'])
  },
  methods: {
    handleInput(e) {
      console.log(e.target.value, "value")
      this.$store.commit('setInputValue', e.target.value)
    },
    // 向列表中新增
    addTolist() {
      if(this.inputValue.trim().length <= 0){
        return this.$message.warning('不能添加空内容！')
      }
      this.$store.commit('addItem')
    },
    // 删除对应的内容
    handleDelete(row) {
      console.log(row.id,"row")
      this.$store.commit('removeItem',row.id)
    }
  }
}
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
  outline: none;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  border-radius: 6px;
}

</style>