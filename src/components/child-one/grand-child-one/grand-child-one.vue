<template>
  <div>
    <h2>Grand Child one is open</h2>
    <ol>
      <li v-for="item in list" :key="item">{{item}}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { createNamespacedHelpers } from 'vuex';
import grandChildOneModule from './store';

const name = 'child-one:grand-child-one';
const { mapState, mapActions } = createNamespacedHelpers(name)

export default Vue.extend({
  name: 'grand-child-one',
  components: {
  },
  computed: {
    ...mapState(['list']),
  },
  methods: {
    ...mapActions(['setList']),
  },
  beforeCreate() {
    this.$store.registerModule(name, grandChildOneModule);
  },
  beforeDestroy() {
    this.$store.unregisterModule(name);
  },
});
</script>
