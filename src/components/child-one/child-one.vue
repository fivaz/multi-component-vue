<template>
  <div>
    <h1>Child one is open</h1>
    <button @click="closeGrandChildOne">close grand child one</button>
    <grand-child-one v-if="isGrandChildOneVisible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GranChildOne from './grand-child-one/grand-child-one.vue'
import EventHandler from '@/utils/EventHandler.vue';

const name = 'child-one';

export default Vue.extend({
  name,
  mixins: [EventHandler],
  components: {
    'grand-child-one': GranChildOne,
  },
  data() {
    return {
      name,
      isGrandChildOneVisible: false,
    };
  },
  methods: {
    openGrandChildOne() {
      this.isGrandChildOneVisible = true;
    },
    closeGrandChildOne() {
      this.isGrandChildOneVisible = false;
    },
  },
});
</script>
