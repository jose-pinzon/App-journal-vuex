<template>
  <Navar />
  <div class="d-flex">
      <div class="col-4">
          <Lateral />
      </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    Navar: defineAsyncComponent(() => import("../components/navar.vue")),
    Lateral: defineAsyncComponent(() =>
      import("../components/barra_Lateral.vue")
    ),
  },
};
</script>

<style></style>
