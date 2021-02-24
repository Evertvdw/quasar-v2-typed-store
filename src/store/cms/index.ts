import { ModuleActions } from './actions';
import { ModuleState, ModuleGetters, ModuleMutations } from './cms';
import { Module } from 'vuex-smart-module';
import { Store } from 'vuex';

// Create a module with module asset classes
export const cms = new Module({
  state: ModuleState,
  getters: ModuleGetters,
  mutations: ModuleMutations,
  actions: ModuleActions,
});

export default (store: Store<unknown>) => {
  console.log('calling cmsStore function');
  return cms.context(store);
};
