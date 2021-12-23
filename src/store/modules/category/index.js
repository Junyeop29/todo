import {
  CATEGORY_LIST,
  CATEGORY_SUCCESS,
  CATEGORY_FAILURE,
  CATEGORY_ITEM_CREATE,
  CATEGORY_LIST_READ,
  CATEGORY_ITEM_UPDATE,
  CATEGORY_ITEM_DELETE,
  CATEGORY_ITEM_TEMP_CREATE,
  CATEGORY_ITEM_TEMP_DELETE,
} from './constants.js';
import * as categoryAPI from '@/api/category.js';

const state = () => ({
  [CATEGORY_LIST]: null,
  [CATEGORY_SUCCESS]: null,
  [CATEGORY_FAILURE]: null,
});

const getters = {
  [CATEGORY_LIST]: state => state[CATEGORY_LIST],
  [CATEGORY_SUCCESS]: state => state[CATEGORY_SUCCESS],
  [CATEGORY_FAILURE]: state => state[CATEGORY_FAILURE],
};

const actions = {
  async [CATEGORY_ITEM_CREATE]({ commit }, { content }) {
    try {
      const result = await categoryAPI.createItem({ content });
      commit(CATEGORY_FAILURE, null);
      commit(CATEGORY_SUCCESS, result);
    } catch (e) {
      commit(CATEGORY_SUCCESS, null);
      commit(CATEGORY_FAILURE, e);
    }
  },
  async [CATEGORY_LIST_READ]({ commit }) {
    try {
      const result = await categoryAPI.readList();
      commit(CATEGORY_FAILURE, null);
      commit(CATEGORY_SUCCESS, result);
      commit(CATEGORY_LIST, result);
    } catch (e) {
      commit(CATEGORY_SUCCESS, null);
      commit(CATEGORY_FAILURE, e);
    }
  },
  async [CATEGORY_ITEM_UPDATE]({ commit }, { id, content }) {
    try {
      const result = await categoryAPI.updateItem({ id, content });
      commit(CATEGORY_FAILURE, null);
      commit(CATEGORY_SUCCESS, result);
    } catch (e) {
      commit(CATEGORY_SUCCESS, null);
      commit(CATEGORY_FAILURE, e);
    }
  },
  async [CATEGORY_ITEM_DELETE]({ commit }, { id }) {
    try {
      const result = await categoryAPI.deleteItem({ id });
      commit(CATEGORY_FAILURE, null);
      commit(CATEGORY_SUCCESS, result);
    } catch (e) {
      commit(CATEGORY_SUCCESS, null);
      commit(CATEGORY_FAILURE, e);
    }
  },
  [CATEGORY_ITEM_TEMP_CREATE]({ commit, state }, payload) {
    const result = [...state[CATEGORY_LIST], payload];
    commit(CATEGORY_LIST, result);
  },
  [CATEGORY_ITEM_TEMP_DELETE]({ commit, state }, { id }) {
    const result = state[CATEGORY_LIST].filter(ele => ele.id !== id);
    commit(CATEGORY_LIST, result);
  },
};

const mutations = {
  [CATEGORY_LIST](state, payload) {
    state[CATEGORY_LIST] = payload;
  },
  [CATEGORY_SUCCESS](state, payload) {
    state[CATEGORY_SUCCESS] = payload;
  },
  [CATEGORY_FAILURE](state, payload) {
    state[CATEGORY_FAILURE] = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
