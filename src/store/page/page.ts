import { Getters, Mutations } from 'vuex-smart-module';

export class ModuleState {
  blocks: number[] = [1, 2, 7, 9];
  layout = '';
}

export class ModuleGetters extends Getters<ModuleState> {
  get blocks() {
    return this.state.blocks;
  }

  get layoutString() {
    return this.state.layout + ' Layout';
  }
}

export class ModuleMutations extends Mutations<ModuleState> {
  addBlock(payload: number) {
    this.state.blocks.push(payload);
  }
}
