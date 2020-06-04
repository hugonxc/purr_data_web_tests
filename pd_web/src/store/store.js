import Vue from 'vue'
import Vuex from 'vuex'
import createMutationsSharer from "vuex-shared-mutations";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    audioContextList: [],
    consoleMsgs: "> ... adsf\n s"
  },
  
  mutations: {
    increment (state) {
      state.count++;
      console.log("incremented")
    },

    audioCtxListPush(state, item){
      state.audioContextList.push(item);
    },

    msgConsole(state, msg){
      state.consoleMsgs = state.consoleMsgs + "\n >..." + msg 
    }
  },

  getters: {
    audio_ctx_list: state => {
      return state.audioContextList
    },

    consoleMsgs: state => {
      return state.consoleMsgs
    }
  },

  plugins: [createMutationsSharer({ predicate: ["increment", "audioCtxListPush", "msgConsole"] })]
})

export default store;
