<template>
  <!-- 如果当前item中有子节点 -->
  <el-submenu v-if="item.children && item.children.length" :index="item.id">
    <!-- 创建菜单分组 -->
    <template slot="title">
      <i v-if="item.icon && item.icon.length" :class="item.icon"></i>
      <span slot="title">{{ item.name }}</span>
    </template>
    <!-- 递归调用自身，直到subItem不含有子节点 -->
    <cas-nav-item
      v-for="subitem in item.children"
      :key="subitem.id"
      :index="subitem.id"
      :item="subitem"
    ></cas-nav-item>
  </el-submenu>

  <!-- 如果当前item不含有子节点 -->
  <el-menu-item v-else :index="item.id" :route="item.url">
    <i v-if="item.icon && item.icon.length" :class="item.icon"></i>
    <span slot="title">{{ item.name }}</span>
  </el-menu-item>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  // 递归组件必须有name
  name: "navItem",
  props: ["item"]
});
</script>