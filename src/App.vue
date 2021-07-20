<template>
    <component :is="component"/>
</template>

<script lang="ts">
import Vue from 'vue';
import Child1 from './components/child-1/Child1.vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'App',
  components: {
    'child-1':Child1,
  },
  computed: {
    ...mapState(['component']),
  },
  mounted() {
    window.addEventListener('message', ({ data }: MessageEvent) => {
      this.$store.dispatch('handleEvent', data);
    });
  },
});
</script>
