import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const test = { // test可从其他文件中import导入
  state: {
    count: 123,
    count2: 321,
    count3: 321
  },
  mutations: {
    increment(state) {
      state.count++
    },
    increment2(state) {
      state.count2++
    },
    increment3(state) {
      state.count3++
    }
  },
  getters: { // fuck,是getters不是getter
    count2: state => state.count2,
    count3: state => state.count3
  },
  actions: {
    test2() {
      this.commit('increment2')
    },
    increment({
      commit
    }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
}
export default new Vuex.Store({ // 总的导出
  modules: {
    test,
//  n......
  }
})
