<template>
    <component :is="component"/>
</template>

<script lang="ts">
import Vue from 'vue';
import ChildOne from './components/child-one/child-one.vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'App',
  components: {
    'child-one':ChildOne,
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
