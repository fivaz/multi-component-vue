import { Module } from 'vuex';
import { RootState } from '@/store/root-state';

export interface State {
    isGrandChildTwoVisible: boolean;
}

export default <Module<State, RootState>>{
    namespaced: true,
    state: () => ({
        isGrandChildTwoVisible: false,
    }),
    mutations: {
        SET_GRAND_CHILD_TWO_VISIBILITY(state, payload: boolean) {
            state.isGrandChildTwoVisible = payload;
        },
    },
    actions: {
        openGrandChildTwo(context) {
            context.commit('SET_GRAND_CHILD_TWO_VISIBILITY', true);
        },
        closeGrandChildTwo(context) {
            context.commit('SET_GRAND_CHILD_TWO_VISIBILITY', false);
        },
    },
};
