import Vue from 'vue'
import Vuex from 'vuex'

import json from '../../public/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    incomeExpense: (state) => state.data,
  },
  mutations: {
    async fetch(state, { res }){
      state.data = res
    },
    add(state,{ payload }){
      state.data.push(payload)
    }
  },
  actions: {
    async fetchIncomeExpense({commit}){
        // let res = {
        //   data: [
        //     {
        //       "date": "2021-07-23",
        //       "type": "income",
        //       "price": 500,
        //       "details": "แม่ให้เงินค่าขนม",
        //       "total": 500
        //     },
        //     {
        //       "date": "2021-07-23",
        //       "type": "expense",
        //       "price": 120,
        //       "details": "ซื้ออาหารกลางวัน",
        //       "total": 380
        //     },
        //     {
        //         "date": "2021-07-23",
        //         "type": "income",
        //         "price": 100,
        //         "details": "พ่อให้เงินค่าขนม",
        //         "total": 480
        //     }
        // ],
        // }
        let res = json
        commit('fetch',{res})
      },
    addNewIncomeExpense({commit},payload){
      commit('add',{payload})
    }
  },
  modules: {
  }
})
