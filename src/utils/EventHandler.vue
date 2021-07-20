<script lang="ts">
import Vue from 'vue';
import emitter from '@/event-emitter'

export default Vue.extend({
  name: 'EventHandler',
  data() {
    return {
      name: '',
    }
  },
  mounted() {
    emitter.on(this.name, ({action, payload}: any) => {
      console.log('action');
      console.log(action);
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const x = this;
      this[action as keyof typeof x](payload);
    });
  },
  beforeDestroy() {
    emitter.off(this.name)
  },
});
</script>
