import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    textPlaceHolder: "What's on your mind?",
    userContent: '',
    contentIsText: true,
  },
  mutations: {
    CHANGE_CONTENT: (state, payload) => {
      state.userContent = payload
    },
    CHANGE_CONTENT_TYPE_TO_LIST: state => {
    state.contentIsText = false;
    },
    CHANGE_CONTENT_TYPE_TO_TEXT: state => {
    state.contentIsText = true;
    },
    ADD_TODO_TO_CONTENT: (state, payload) => {
      const arr = state.userContent.split('\n');
      arr.reverse().push(payload);
      state.userContent = arr.reverse().join('\n');
    }
  },
  actions: {
    APPLY_SETTINGS({commit}, payload) {
      // console.log(payload)
      commit('CHANGE_CONTENT', payload)
    },
    CHANGE_CONTENT_TYPE_TO_LIST_ACTION({commit}) {
      commit('CHANGE_CONTENT_TYPE_TO_LIST')
    },
    CHANGE_CONTENT_TYPE_TO_TEXT_ACTION({commit}) {
      commit('CHANGE_CONTENT_TYPE_TO_TEXT')
    },
    ADD_TODOS_FROM_LIST({commit}, payload) {
      commit('ADD_TODO_TO_CONTENT', payload)
    }
  },
  getters: {
    GET_CONTENT: state => {
      return state.userContent;
    },
    GET_CONTENT_TYPE: state => {
      return state.contentIsText;
    }
  },
  modules: { auth, },
});
