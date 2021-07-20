<template>
  <div>
    <h1>Child one is open</h1>
    <grand-child-one v-if="isGrandChildOneVisible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GranChildOne from './grand-child-one/grand-child-one.vue'
import emitter from '@/event-emitter'

const name = 'child-one';

export default Vue.extend({
  name,
  components: {
    'grand-child-one': GranChildOne,
  },
  data() {
    return {
      isGrandChildOneVisible: false,
    };
  },
  methods: {
    openGrandChildOne() {
      this.isGrandChildOneVisible = true;
    },
  },
  beforeCreate() {
    emitter.on(name, ({action, payload}:any) => {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const x = this;
      this[action as keyof typeof x](payload);
    });
  },
  beforeDestroy() {
    emitter.off(name)
  },
});
</script>
