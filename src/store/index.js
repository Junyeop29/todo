import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import category from './modules/category';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo,
    category,
  },
});
