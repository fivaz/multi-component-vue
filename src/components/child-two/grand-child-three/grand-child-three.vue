<template>
  <div>
    <h2>Grand Child three is open</h2>
    <ol>
      <li v-for="item in bar" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EventHandler from '@/utils/EventHandler.vue';

const name = 'grand-child-three';

export default Vue.extend({
  name,
  mixins:[EventHandler],
  data(){
    return {
      name,
      bar: [] as string[],
    }
  },
  methods: {
    setBar(payload: string[]) {
      this.bar = payload;
    }
  },
});
</script>
