<template>
  <div>
    Cms pages from dynamically loaded store:)
    {{ cmsStore.getters.pages }}
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import cmsStore from 'src/store/cms';

export default class ClassComponent extends Vue {
  // When using a dynamic store module you have to import that in the component like:
  get cmsStore() {
    return cmsStore(this.$store);
  }
  // There seems to be a weird error when I do it like this though, it is like this variable is declared and
  // stored on this component before the dynamic module is there. It complains about .getters of undefined in the template
  // In Vue2 the code below worked, but switching to the above is not so bad.
  // cmsStore = cmsStore(this.$store);
}
</script>
