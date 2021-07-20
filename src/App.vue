<template>
  <component :is="component"/>
</template>

<script lang="ts">
import Vue from 'vue';
import ChildOne from './components/child-one/child-one.vue';
import emitter from './event-emitter'

export default Vue.extend({
  name: 'App',
  components: {
    'child-one': ChildOne,
  },
  data: () => ({
    component: ''
  }),
  mounted() {
    window.addEventListener('message', ({data}: MessageEvent) => {
      const {component, action, payload} = data;
      if (action === 'changeComponent') {
        this.component = component;
      }else{
        emitter.emit(component, {action, payload})
      }
    });
  },
});
</script>
