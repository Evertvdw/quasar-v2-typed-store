import { Store } from 'vuex';
import Vue from 'vue';
import { root } from 'src/store';
import { Context } from 'vuex-smart-module';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $tstore: Context<typeof root>;
  }
}

export default function ({
  app,
  store,
}: {
  app: Vue.App<unknown>;
  store: Store<unknown>;
}) {
  app.config.globalProperties.$tstore = root.context(store);
}
