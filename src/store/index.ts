import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from '@/store/root-state';

Vue.use(Vuex)

function getComponent(namespace: string) {
  return namespace.split(':')[0];
}

export default new Vuex.Store<RootState>({
  state: {
    component: ''
  },
  mutations: {
    component(state, component) {
      state.component = component;
    },
  },
  actions: {
    handleEvent({ commit, state, dispatch }, { namespace, action, payload }) {
      if (namespace) {
        console.log(`namespace = ${namespace}`);
        console.log(`action = ${action}`);
        console.log('payload');
        console.log(payload);
        if (state.component === getComponent(namespace)) {
          dispatch(`${namespace}/${action}`, payload);
        } else {
          commit('component', getComponent(namespace));
        }
      }
    },
  },
})
