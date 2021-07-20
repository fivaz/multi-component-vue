import { Module } from 'vuex';
import { RootState } from '@/store/root-state';

export interface State {
    foo: string[]
}

export default <Module<State, RootState>>{
    namespaced: true,
    state: () => ({
        foo: [],
    }),
    mutations: {
        SET_FOO(state, payload: string[]) {
            state.foo = payload;
        },
    },
    actions: {
        setFoo(context, payload: string[]) {
            context.commit('SET_FOO', payload);
        },
    },
};
