import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    // 列表数据
    list: [
      {
        "id": 0,
        "info": "喜羊羊与灰太狼",
        "done": true
      },
      { 
        "id": 1, 
        "info": "傲慢与偏见", 
        "done": false
      },
      { 
        "id": 2, 
        "info": "铁甲小宝", 
        "done": false
      },
      { 
        "id": 3, 
        "info": "误杀", 
        "done": false
      },
      { 
        "id": 4, 
        "info": "误杀2", 
        "done": false
      }
    ],
    // input输入的内容
    inputValue: '',
    nextId: 5
  },
  getters: {
    showNuber(state) {
      return '当前最新的数量是：【' + state.count + '】'
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    },
    // 列表练习--------------------------------------------------
    initList(state,list){
      state.list = list
    },
    // 把输入的值赋值过来
    setInputValue(state,val){
      state.inputValue =  val
    },
    // 新增列表内容
    addItem(state) {
      const obj = {
        id : state.nextId,
        info : state.inputValue.trim(),
        done : false
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    },
    // 删除对应的作品
    removeItem(state,id) {
      const i = state.list.findIndex(x=>x.id === id)
      if(i !== -1){
        state.list.splice(i,1)
      }
    }
  },
  // 处理异步操作
  actions: {
    async1(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNasync(context, step) {
      setTimeout(() => {
        context.commit("addN", step)
      }, 500)
    },
    subAsync1(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    // 列表练习----------------------------------------------------
    // getList(context) {
    //   axios.get('./list.json').then(({data})=>{
    //     console.log(data,"data")
    //     context.commit('initList',data)
    //   })
    // }
  },
  modules: {
  }
})
