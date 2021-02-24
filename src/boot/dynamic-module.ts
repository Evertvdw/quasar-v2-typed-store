import { registerModule } from 'vuex-smart-module';
import { Store } from 'vuex';
import { Router } from 'vue-router';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({
  store,
  router,
  urlPath,
}: {
  store: Store<unknown>;
  router: Router;
  urlPath: string;
}) => {
  let cmsVisited = false;
  if (urlPath.startsWith('/cms')) {
    const { cms } = await import(/* webpackChunkName: "cms" */ 'src/store/cms');
    registerModule(store, ['cms'], 'cms/', cms);
    cmsVisited = true;
  }
  router.beforeEach(async (to, from, next) => {
    if (to.fullPath.startsWith('/cms') && !cmsVisited) {
      const { cms } = await import(
        /* webpackChunkName: "cms" */ 'src/store/cms'
      );
      registerModule(store, ['cms'], 'cms/', cms);
      cmsVisited = true;
    }
    next();
  });
};
