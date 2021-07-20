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
import emitter from '@/event-emitter'

const name = 'grand-child-one';

export default Vue.extend({
  name: 'grand-child-one',
  data(){
    return {
      list: [] as string[],
    }
  },
  methods: {
    setList(payload: string[]) {
      this.list = payload;
    }
  },
  beforeCreate() {
    emitter.on(name, ({action, payload}: any) => {
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
