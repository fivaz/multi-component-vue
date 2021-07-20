import { Module } from 'vuex';
import { RootState } from '@/store/root-state';

export interface State {
    isGrandChild1Visible: boolean;
    isGrandChild2Visible: boolean;
}

export default <Module<State, RootState>>{
    namespaced: true,
    state: () => ({
        isGrandChild1Visible: false,
        isGrandChild2Visible: false,
    }),
    mutations: {
        SET_GRAND_CHILD_1_VISIBILITY(state, payload: boolean) {
            state.isGrandChild1Visible = payload;
        },
        SET_GRAND_CHILD_2_VISIBILITY(state, payload: boolean) {
            state.isGrandChild2Visible = payload;
        },
    },
    actions: {
        openGrandChild1(context) {
            context.commit('SET_GRAND_CHILD_1_VISIBILITY', true);
        },
        closeGrandChild1(context) {
            context.commit('SET_GRAND_CHILD_1_VISIBILITY', false);
        },
        openGrandChild2(context) {
            context.commit('SET_GRAND_CHILD_2_VISIBILITY', true);
        },
        closeGrandChild2(context) {
            context.commit('SET_GRAND_CHILD_2_VISIBILITY', false);
        },
    },
};
