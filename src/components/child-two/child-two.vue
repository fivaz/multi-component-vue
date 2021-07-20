<template>
  <div>
    <h1>Child two is open</h1>
    <grand-child-two v-if="isGrandChildTwoVisible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GranChildTwo from './grand-child-two/grand-child-two.vue';
import EventHandler from '@/utils/EventHandler.vue';

const name = 'child-two';

export default Vue.extend({
  name,
  mixins: [EventHandler],
  components: {
    'grand-child-two': GranChildTwo,
  },
  data() {
    return {
      name,
      isGrandChildTwoVisible: false,
    };
  },
  methods: {
    openGrandChildTwo() {
      this.isGrandChildTwoVisible = true;
    },
  },
});
</script>
