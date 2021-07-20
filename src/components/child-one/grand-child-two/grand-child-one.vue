<template>
  <div>
    <h2>Grand Child one is open</h2>
    <ol>
      <li v-for="item in foo" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
import grandChildOneModule from './store';

const name = 'grand-child-one';
const { mapState, mapActions } = createNamespacedHelpers(name)

export default Vue.extend({
  name,
  computed: {
    ...mapState(['foo']),
  },
  methods: {
    ...mapActions(['setFoo']),
  },
  beforeCreate() {
    this.$store.registerModule(name, grandChildOneModule);
  },
  beforeDestroy() {
    this.$store.unregisterModule(name);
  },
});
</script>
