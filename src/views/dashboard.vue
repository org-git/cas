<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <el-card>
        <div slot="header">
          <span>网站导航</span>
        </div>
        <el-table stripe :show-header="false" :data="items">
          <el-table-column prop="icon" width="60" align="center">
            <template slot-scope="scope">
              <i :class="scope.row.icon"></i>
            </template>
          </el-table-column>
          <el-table-column prop="url">
            <template slot-scope="scope">
              <el-link :href="scope.row.url" target="_blank">
                {{
                scope.row.title
                }}
              </el-link>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Github", icon: "el-icon-odometer", url: "http://github.com" },
        {
          title: "Element",
          icon: "iconfont icon-vip-www",
          url: "https://element.eleme.cn/2.13/#/zh-CN/"
        },
        {
          title: "Vue",
          icon: "iconfont icon-vip-www",
          url: "https://cn.vuejs.org/v2/guide/index.html"
        },
        {
          title: "Bing",
          icon: "iconfont icon-vip-www",
          url: "https://cn.bing.com/"
        }
      ]
    };
  }
};
</script>
