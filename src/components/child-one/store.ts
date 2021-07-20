import { Module } from 'vuex';
import { RootState } from '@/store/root-state';

export interface State {
    isGrandChildOneVisible: boolean;
    isGrandChildTwoVisible: boolean;
}

export default <Module<State, RootState>>{
    namespaced: true,
    state: () => ({
        isGrandChildOneVisible: false,
        isGrandChildTwoVisible: false,
    }),
    mutations: {
        SET_GRAND_CHILD_ONE_VISIBILITY(state, payload: boolean) {
            state.isGrandChildOneVisible = payload;
        },
        SET_GRAND_CHILD_TWO_VISIBILITY(state, payload: boolean) {
            state.isGrandChildTwoVisible = payload;
        },
    },
    actions: {
        openGrandChildOne(context) {
            context.commit('SET_GRAND_CHILD_ONE_VISIBILITY', true);
        },
        closeGrandChildOne(context) {
            context.commit('SET_GRAND_CHILD_ONE_VISIBILITY', false);
        },
        openGrandChildTwo(context) {
            context.commit('SET_GRAND_CHILD_TWO_VISIBILITY', true);
        },
        closeGrandChildTwo(context) {
            context.commit('SET_GRAND_CHILD_TWO_VISIBILITY', false);
        },
    },
};
