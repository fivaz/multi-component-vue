import { Module } from 'vuex';
import { RootState } from '@/store/root-state';

export interface State {
    bar: number[]
}

export default <Module<State, RootState>>{
    namespaced: true,
    state: () => ({
        bar: [],
    }),
    mutations: {
        SET_BAR(state, payload: number[]) {
            state.bar = payload;
        },
    },
    actions: {
        setBar(context, payload: number[]) {
            context.commit('SET_BAR', payload);
        },
    },
};
