import { Module } from 'vuex';
import { RootState } from '@/store/root-state';

export interface State {
    isGrandChildOneVisible: boolean;
}

export default <Module<State, RootState>>{
    namespaced: true,
    state: () => ({
        isGrandChildOneVisible: false,
    }),
    mutations: {
        SET_GRAND_CHILD_ONE_VISIBILITY(state, payload: boolean) {
            state.isGrandChildOneVisible = payload;
        },
    },
    actions: {
        openGrandChildOne(context) {
            context.commit('SET_GRAND_CHILD_ONE_VISIBILITY', true);
        },
        closeGrandChildOne(context) {
            context.commit('SET_GRAND_CHILD_ONE_VISIBILITY', false);
        },
    },
};
