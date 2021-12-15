/*
todolist 자료형
 id:string
 content:string
 done:boolean
 categoryId:string
 child:array
 order:number
 createdDate:date

child 자료형
 id:String
 content:string
 done:boolean
 order:number
 createdDate:date
*/

import {
  TODO_LIST,
  TODO_SUCCESS,
  TODO_FAILURE,
  TODO_ITEM_CREATE,
  TODO_LIST_READ,
  TODO_ITEM_UPDATE,
  TODO_ITEM_DELETE,
  TODO_ITEM_CHILD,
  TODO_ITEM_TOGGLE,
} from './constants.js';
import * as todoAPI from '@/api/todo.js';

const state = () => ({
  [TODO_LIST]: null,
});

const getters = {
  [TODO_LIST]: state => state[TODO_LIST],
  [TODO_SUCCESS]: state => state[TODO_SUCCESS],
  [TODO_FAILURE]: state => state[TODO_FAILURE],
};

const mutations = {
  [TODO_LIST](state, payload) {
    state[TODO_LIST] = payload;
  },
  [TODO_SUCCESS](state, payload) {
    state[TODO_SUCCESS] = payload;
  },
  [TODO_FAILURE](state, payload) {
    state[TODO_FAILURE] = payload;
  },
};

const actions = {
  async [TODO_ITEM_CREATE]({ commit }, { content, categoryId }) {
    try {
      const result = await todoAPI.createItem({ content, categoryId });
      commit(TODO_FAILURE, null);
      commit(TODO_SUCCESS, result);
    } catch (e) {
      commit(TODO_SUCCESS, null);
      commit(TODO_FAILURE, e);
    }
  },
  async [TODO_LIST_READ]({ commit }, { categoryId }) {
    try {
      const result = await todoAPI.readList({ categoryId });
      commit(TODO_FAILURE, null);
      commit(TODO_SUCCESS, 'success');
      commit(TODO_LIST, result);
    } catch (e) {
      commit(TODO_SUCCESS, null);
      commit(TODO_FAILURE, e);
    }
  },
  async [TODO_ITEM_UPDATE]({ commit }, { id, content }) {
    try {
      const result = await todoAPI.updateItem({ id, content });
      commit(TODO_FAILURE, null);
      commit(TODO_SUCCESS, result);
    } catch (e) {
      commit(TODO_SUCCESS, null);
      commit(TODO_FAILURE, e);
    }
  },
  async [TODO_ITEM_DELETE]({ commit }, { id }) {
    try {
      const result = await todoAPI.deleteItem({ id });
      commit(TODO_FAILURE, null);
      commit(TODO_SUCCESS, result);
    } catch (e) {
      commit(TODO_SUCCESS, null);
      commit(TODO_FAILURE, e);
    }
  },
  async [TODO_ITEM_CHILD]({ commit }, { id, content }) {
    try {
      const result = await todoAPI.createItemChild({ id, content });
      commit(TODO_FAILURE, null);
      commit(TODO_SUCCESS, result);
    } catch (e) {
      commit(TODO_SUCCESS, null);
      commit(TODO_FAILURE, e);
    }
  },
  async [TODO_ITEM_TOGGLE]({ commit }, { id, done }) {
    try {
      const result = await todoAPI.toggleItem({ id, done });
      commit(TODO_FAILURE, null);
      commit(TODO_SUCCESS, result);
    } catch (e) {
      commit(TODO_SUCCESS, null);
      commit(TODO_FAILURE, e);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
