<template>
  <el-container>
    <el-main style="min-height: 680px;">
      <router-view></router-view>
    </el-main>
    <el-footer>
      <el-divider></el-divider>
      <cas-footer></cas-footer>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
.el-main {
  padding: 0;
}
</style>
