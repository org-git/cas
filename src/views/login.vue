<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col>
      <el-carousel arrow="never" height="740px">
        <el-carousel-item v-for="(item, index) in imgs" :key="item">
          <img :src="item" :alt="`img${index + 1}`" />
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-tabs type="border-card" class="box">
      <el-tab-pane>
        <span slot="label"> <i class="el-icon-s-custom"></i>login </span>
        <el-form
          :model="login"
          :rules="rules"
          status-icon
          ref="form"
          label-width="100px"
        >
          <el-form-item label="UserName" prop="username">
            <el-input
              v-model="login.username"
              prefix-icon="el-icon-search"
            ></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              v-model="login.password"
              prefix-icon="el-icon-lock"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="medium"
              icon="iconfont icon-denglu"
              @click="onSubmit('form')"
              >Login</el-button
            >&emsp;
            <el-link :underline="false" type="info">Forgot password?</el-link>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<style lang="scss" scoped>
.box {
  position: absolute;
  top: 50%;
  right: 10%;
  z-index: 99;
  margin-top: -170px;
  margin-right: 130px;
}
</style>
<script>
export default {
  data() {
    return {
      imgs: [
        "http://pic.bizhi360.com/bbpic/15/915.jpg",
        "https://uploads.5068.com/allimg/171116/1-1G116113Z8.jpg"
      ],
      login: { username: "admin", password: "123456" },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 20, message: "长度在3到20个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 20, message: "长度在3到20个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert(JSON.stringify(this.login));
        } else {
          return false;
        }
      });
    }
  }
};
</script>
