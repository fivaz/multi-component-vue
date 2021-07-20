<script lang="ts">
import Vue from 'vue';
import emitter from '@/event-emitter'

export default Vue.extend({
  name:'EventHandler',
  data(){
    return {
        componentName:'',
    }
  },
  mounted() {
      emitter.on(this.componentName, ({action, payload}:any) => {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const x = this;
          this[action as keyof typeof x](payload);
      });
  },
  beforeDestroy() {
      emitter.off(this.componentName)
  },
});
</script>
