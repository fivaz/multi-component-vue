<template>
  <div>
    <h1>Child two is open</h1>
    <button @click="closeGrandChildTwo">close child two</button>
    <grand-child-two v-if="isGrandChildTwoVisible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GranChildTwo from './grand-child-two/grand-child-two.vue';
import { createNamespacedHelpers } from 'vuex';
import childTwoModule from './store';

const name = 'child-two';
const { mapState, mapActions } = createNamespacedHelpers(name);

export default Vue.extend({
  name,
  comptwonts: {
    'grand-child-two': GranChildTwo,
  },
  computed: {
    ...mapState(['isGrandChildTwoVisible']),
  },
  methods: {
    ...mapActions(['closeGrandChildTwo']),
  },
  beforeCreate() {
    this.$store.registerModule(name, childTwoModule);
  },
  beforeDestroy() {
    this.$store.unregisterModule(name);
  },
});
</script>
