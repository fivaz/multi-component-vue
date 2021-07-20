import Vue from 'vue';
import emitter from '@/event-emitter'

export default Vue.extend({
    name:'EventHandler',
    data(){
      return {
          name:'',
      }
    },
    beforeCreate() {
        emitter.on(this.name, ({action, payload}:any) => {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const x = this;
            this[action as keyof typeof x](payload);
        });
    },
    beforeDestroy() {
        emitter.off(this.name)
    },
});
