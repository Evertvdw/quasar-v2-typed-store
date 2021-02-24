import { store } from 'quasar/wrappers';
import { createStore, Module } from 'vuex-smart-module';
import { page } from './page';
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
const rootConfig = {
  modules: {
    page,
  },
};

export const root = new Module(rootConfig);

export default store(function (/* { ssrContext } */) {
  const rootStore = createStore(root, {
    strict: !!process.env.DEBUGGING,
  });

  return rootStore;
});
