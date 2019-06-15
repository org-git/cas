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

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
