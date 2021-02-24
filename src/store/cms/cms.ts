import { Getters, Mutations } from 'vuex-smart-module';

export class ModuleState {
  pages: number[] = [1, 2, 192];
  test = '';
}

export class ModuleGetters extends Getters<ModuleState> {
  get pages() {
    return this.state.pages;
  }

  get testString() {
    return this.state.test + ' Test';
  }
}

export class ModuleMutations extends Mutations<ModuleState> {
  addPage(payload: number) {
    this.state.pages.push(payload);
  }
}
