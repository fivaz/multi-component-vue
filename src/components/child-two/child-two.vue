<template>
  <div>
    <h1>Child two is open</h1>
    <grand-child-three v-if="isGrandChildThreeVisible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GranChildThree from './grand-child-three/grand-child-three.vue';
import EventHandler from '@/utils/EventHandler.vue';

const name = 'child-two';

export default Vue.extend({
  name,
  mixins: [EventHandler],
  components: {
    'grand-child-three': GranChildThree,
  },
  data() {
    return {
      name,
      isGrandChildThreeVisible: false,
    };
  },
  methods: {
    openGrandChildThree() {
      this.isGrandChildThreeVisible = true;
    },
  },
});
</script>
