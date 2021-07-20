<template>
  <div>
    <h1>Child 1 is open</h1>
    <grand-child-1 v-if="isGrandChild1Visible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GranChild1 from './grand-child-1/grand-child-1.vue'
import { createNamespacedHelpers } from 'vuex';
import child1Module from './store';

const name = 'child1';
const { mapState, mapActions } = createNamespacedHelpers(name)

export default Vue.extend({
  name,
  components: {
    'grand-child-1': GranChild1,
  },
  computed: {
    ...mapState(['isGrandChild1Visible', 'isGrandChild2Visible']),
  },
  methods: {
    ...mapActions(['closeGrandChild1', 'closeGrandChild2']),
  },
  beforeCreate() {
    this.$store.registerModule(name, child1Module);
  },
  beforeDestroy() {
    this.$store.unregisterModule(name);
  },
});
</script>
