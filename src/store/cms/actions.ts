import { Actions } from 'vuex-smart-module';
import { ModuleState, ModuleGetters, ModuleMutations } from './cms';

export class ModuleActions extends Actions<
  ModuleState,
  ModuleGetters,
  ModuleMutations,
  ModuleActions
> {
  addPage(payload: { amount: number; interval: number }) {
    // Actions instance has 'state', 'getters', 'commit' and 'dispatch' properties

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.commit('addPage', payload.amount);
        resolve();
      }, payload.interval);
    });
  }
}
