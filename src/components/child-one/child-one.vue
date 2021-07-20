<template>
  <div>
    <h1>Child one is open</h1>
    <button @click="closeGrandChildOne">close child one</button>
    <grand-child-one v-if="isGrandChildOneVisible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GranChildOne from './grand-child-one/grand-child-one.vue';
import { createNamespacedHelpers } from 'vuex';
import childOneModule from './store';

const name = 'child-one';
const { mapState, mapActions } = createNamespacedHelpers(name);

export default Vue.extend({
  name,
  components: {
    'grand-child-one': GranChildOne,
  },
  computed: {
    ...mapState(['isGrandChildOneVisible']),
  },
  methods: {
    ...mapActions(['closeGrandChildOne']),
  },
  beforeCreate() {
    this.$store.registerModule(name, childOneModule);
  },
  beforeDestroy() {
    this.$store.unregisterModule(name);
  },
});
</script>
