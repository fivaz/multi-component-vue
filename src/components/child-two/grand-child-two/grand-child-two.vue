<template>
  <div>
    <h2>Grand Child two is open</h2>
    <ol>
      <li v-for="item in bar" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
import grandChildTwoModule from './store';

const name = 'grand-child-two';
const { mapState, mapActions } = createNamespacedHelpers(name)

export default Vue.extend({
  name,
  computed: {
    ...mapState(['bar']),
  },
  methods: {
    ...mapActions(['setBar']),
  },
  beforeCreate() {
    this.$store.registerModule(name, grandChildTwoModule);
  },
  beforeDestroy() {
    this.$store.unregisterModule(name);
  },
});
</script>
