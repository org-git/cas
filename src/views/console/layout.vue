<template>
  <el-container>
    <el-aside>
      <el-menu
        unique-opened
        router
        default-active="2"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <cas-nav-item
          v-for="item in menus"
          :item="item"
          :key="item.id"
          :index="item.id"
        ></cas-nav-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="18"></el-col>
          <el-col :span="6">
            <span class="el-dropdown-link">
              <el-avatar
                size="small"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar
              >管理员
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><i class="el-icon-lock">退出登录</i></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/console' }"
            >首页</el-breadcrumb-item
          >
          <el-breadcrumb-item>导航</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isCollapse: false,
      menus: [
        {
          id: "1",
          name: "导航一",
          icon: "el-icon-location",
          url: "/console",
          children: [
            {
              id: "11",
              name: "导航1",
              icon: "el-icon-location",
              url: "/console"
            }
          ]
        },
        { id: "2", name: "导航二", icon: "el-icon-location", url: "/console" },
        { id: "3", name: "导航三", icon: "el-icon-location", url: "/console" },
        { id: "4", name: "导航四", icon: "el-icon-location", url: "/console" }
      ]
    };
  }
});
</script>
