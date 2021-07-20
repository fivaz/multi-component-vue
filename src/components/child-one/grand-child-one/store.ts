import { Module } from 'vuex';
import { RootState } from '@/store/root-state';

export interface State {
    list: string[]
}

export default <Module<State, RootState>>{
    namespaced: true,
    state: () => ({
        list: [],
    }),
    mutations: {
        SET_LIST(state, payload: string[]) {
            state.list = payload;
        },
    },
    actions: {
        setList(context, payload: string[]) {
            context.commit('SET_LIST', payload);
        },
    },
};
