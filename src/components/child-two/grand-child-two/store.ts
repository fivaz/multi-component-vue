import { Module } from 'vuex';
import { RootState } from '@/store/root-state';

export interface State {
    bar: string[]
}

export default <Module<State, RootState>>{
    namespaced: true,
    state: () => ({
        bar: [],
    }),
    mutations: {
        SET_BAR(state, payload: string[]) {
            state.bar = payload;
        },
    },
    actions: {
        setBar(context, payload: string[]) {
            context.commit('SET_BAR', payload);
        },
    },
};
