<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    Page store {{ $tstore.modules.page.getters.blocks }}
    <q-btn to="/cms">To CMS!</q-btn>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ClassComponent.vue';
import { Vue, Options } from 'vue-class-component';

@Options({
  components: { ExampleComponent },
})
export default class PageIndex extends Vue {
  // You can either use the $tstore.modules directly or if you prefer declare the module like:
  // page = $tstore.modules.page

  todos: Todo[] = [
    {
      id: 1,
      content: 'ct1',
    },
    {
      id: 2,
      content: 'ct2',
    },
    {
      id: 3,
      content: 'ct3',
    },
    {
      id: 4,
      content: 'ct4',
    },
    {
      id: 5,
      content: 'ct5',
    },
  ];
  meta: Meta = {
    totalCount: 1200,
  };

  created() {
    // All actions are typed and can be accessed by calling the function in .actions or by using dispatch
    // like: this.$tstore.modules.page.dispatch('addPage')
    void this.$tstore.modules.page.actions.addPage({
      amount: 5,
      interval: 1000,
    });
  }
}
</script>
