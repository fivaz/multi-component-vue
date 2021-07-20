<template>
  <component :is="component"/>
</template>

<script lang="ts">
import Vue from 'vue';
import ChildOne from './components/child-one/child-one.vue';
import { mapState } from 'vuex';
// import ChildTwo from './components/child-two/child-two.vue';

export default Vue.extend({
  name: 'App',
  components: {
    'child-one': ChildOne,
    // 'child-two': ChildTwo,
  },
  computed: {
    ...mapState(['component']),
  },
  mounted() {
    window.addEventListener('message', ({data}: MessageEvent) => {
      this.$store.dispatch('handleEvent', data);
    });
  },
});
</script>
