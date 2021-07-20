import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from '@/store/root-state';

Vue.use(Vuex)

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
        handleEvent({commit, dispatch}, {component, action, payload}) {
            //this check is only to avoid events dispatched by Vue cli
            if (component) {
                if (action === 'changeComponent') {
                    commit('component', component);
                } else {
                    dispatch(`${component}/${action}`, payload);
                }
            }
        },
    }
})
