<template>
  <div>
    <h2>Grand Child one is open</h2>
    <ol>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import EventHandler from '@/utils/EventHandler.vue';

const name = 'grand-child-one';

export default Vue.extend({
  name: 'grand-child-one',
  mixins:[EventHandler],
  data(){
    return {
      componentName: name,
      list: [] as string[],
    }
  },
  methods: {
    setList(payload: string[]) {
      this.list = payload;
    }
  },
});
</script>
