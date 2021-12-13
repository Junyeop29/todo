import { faSun, faStar } from '@fortawesome/free-regular-svg-icons';
import {
  CATEGORY_FIX_LIST,
  CATEGORY_LIST,
  CATEGORY_SUCCESS,
  CATEGORY_FAILURE,
  CATEGORY_ITEM_CREATE,
  CATEGORY_LIST_READ,
  CATEGORY_ITEM_UPDATE,
  CATEGORY_ITEM_DELETE,
} from './constants.js';
import * as categoryAPI from '@/api/category.js';

const state = () => ({
  [CATEGORY_FIX_LIST]: [
    {
      id: 'today',
      content: '오늘 할 일',
      isFix: true,
      icon: faSun,
    },
    {
      id: 'importance',
      content: '중요',
      isFix: true,
      icon: faStar,
    },
  ],
  // [CATEGORY_LIST]: [
  //   {
  //     id: '',
  //     content: '',
  //     isFix: false,
  //   },
  // ],
  [CATEGORY_LIST]: null,
  [CATEGORY_SUCCESS]: null,
  [CATEGORY_FAILURE]: null,
});

const getters = {
  [CATEGORY_FIX_LIST]: state => state[CATEGORY_FIX_LIST],
  [CATEGORY_LIST]: state => state[CATEGORY_LIST],
  [CATEGORY_SUCCESS]: state => state[CATEGORY_SUCCESS],
  [CATEGORY_FAILURE]: state => state[CATEGORY_FAILURE],
};

const actions = {
  async [CATEGORY_ITEM_CREATE]({ commit }, payload) {
    try {
      const result = await categoryAPI.createCategoryItem(payload);
      commit(CATEGORY_FAILURE, null);
      commit(CATEGORY_SUCCESS, result);
    } catch (e) {
      commit(CATEGORY_SUCCESS, null);
      commit(CATEGORY_FAILURE, e);
    }
  },
  async [CATEGORY_LIST_READ]({ commit }) {
    try {
      const result = await categoryAPI.readCategoryList();
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
      const result = await categoryAPI.updateCategoryItem({ id, content });
      commit(CATEGORY_FAILURE, null);
      commit(CATEGORY_SUCCESS, result);
    } catch (e) {
      commit(CATEGORY_SUCCESS, null);
      commit(CATEGORY_FAILURE, e);
    }
  },
  async [CATEGORY_ITEM_DELETE]({ commit }, { id }) {
    try {
      const result = await categoryAPI.deleteCategoryItem({ id });
      commit(CATEGORY_FAILURE, null);
      commit(CATEGORY_SUCCESS, result);
    } catch (e) {
      commit(CATEGORY_SUCCESS, null);
      commit(CATEGORY_FAILURE, e);
    }
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
