import Vue from 'vue'
import Vuex from 'vuex'
import createMutationsSharer from "vuex-shared-mutations";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++;
      console.log("incremented")
    }
  },

  plugins: [createMutationsSharer({ predicate: ["increment"] })]
})

export default store;
