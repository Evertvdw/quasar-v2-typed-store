import { ModuleActions } from './actions';
import { ModuleState, ModuleGetters, ModuleMutations } from './page';
import { Module } from 'vuex-smart-module';
import { Store } from 'vuex';

// Create a module with module asset classes
export const page = new Module({
  state: ModuleState,
  getters: ModuleGetters,
  mutations: ModuleMutations,
  actions: ModuleActions,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const rootStore = store({}) as Store<any>;

// registerModule(rootStore, ['cms'], 'cms/', page);

export default function getStore(store: Store<unknown>) {
  return page.context(store);
}
