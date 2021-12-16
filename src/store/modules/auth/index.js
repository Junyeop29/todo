import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGIN, AUTH_REGISTER } from './constants.js';
import * as authAPI from '@/api/auth.js';

const state = () => ({
  [AUTH_SUCCESS]: null,
  [AUTH_FAILURE]: null,
});

const getters = {
  [AUTH_SUCCESS]: state => state[AUTH_SUCCESS],
  [AUTH_FAILURE]: state => state[AUTH_FAILURE],
};

const mutations = {
  [AUTH_SUCCESS]: (state, payload) => {
    state[AUTH_SUCCESS] = payload;
  },
  [AUTH_FAILURE]: (state, payload) => {
    state[AUTH_FAILURE] = payload;
  },
};

const actions = {
  [AUTH_LOGIN]: async ({ commit }, { username, password }) => {
    try {
      const result = await authAPI.login({ username, password });
      commit(AUTH_FAILURE, null);
      commit(AUTH_SUCCESS, result);
    } catch (e) {
      commit(AUTH_SUCCESS, null);
      commit(AUTH_FAILURE, e);
    }
  },
  [AUTH_REGISTER]: async ({ commit }, { username, password }) => {
    try {
      const result = await authAPI.register({ username, password });
      commit(AUTH_FAILURE, null);
      commit(AUTH_SUCCESS, result);
    } catch (e) {
      commit(AUTH_SUCCESS, null);
      commit(AUTH_FAILURE, e);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
