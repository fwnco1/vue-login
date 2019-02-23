<template>
  <div class="login-container">
    <h1>王者荣耀后台管理系统</h1>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      // let username = this.username
      // let password = this.password
      let { username, password } = this;
      // 0. 点击登录按钮, 进行表单校验
      if (username.trim().length == 0 || password.trim().length == 0) {
        return this.$message({
          showClose: true,
          message: "账号或密码不能为空",
          type: "error"
        });
      }
      this.$http
        .post("/users/login", { username, password })
        .then(res => {
            console.dir(res)
            
          this.$message({
            showClose: true,
            message: res.data.succMsg,
            type: "success"
          })
            localStorage.setItem('token',res.data.data.token)
            localStorage.setItem('userinfo',JSON.stringify(res.data.data))
            this.$router.push('/home')
        })
        .catch(err => {
          console.dir(err);
          this.$message({
            showClose: true,
            message: err.response.data.errMsg,
            type: "error"
          })
        })
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 400px;
  margin: 200px auto;
  h1 {
    text-align: center;
    margin: 20px;
    color: #e92112;
    font-weight: bold;
  }
}
</style>
