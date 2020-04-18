<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class app extends Vue {
  private loading: boolean = false;
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
