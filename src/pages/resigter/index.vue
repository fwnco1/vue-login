<template>
  <div class="register-container">
    <h1>王者荣耀注册界面</h1>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="passwordConfirm"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="mobile"></el-input>
      </el-form-item>
      <el-form-item label="验证码" class="vCode-container">
        <el-input v-model="vCode"></el-input>
        <div @click="getVCode" class="v-code" v-html="vCodeSvg"></div>
      </el-form-item>

      <el-form-item class="buttom-container">
        <el-button type="danger" @click="onResigter">注册</el-button>
        <router-link to="/login">已有账号?去登陆</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordConfirm: "",
      nickname: "",
      vCode: "",
      vCodeSvg: "",
      mobile: ""
    };
  },
  methods: {
    onResigter() {
      let {
        username,
        password,
        passwordConfirm,
        nickname,
        vCode,
        vCodeSvg,
        mobile
      } = this;
      // 非空校验
      if (
        !username.trim() ||
        !password.trim() ||
        !passwordConfirm.trim() ||
        !nickname.trim() ||
        !vCode.trim() ||
        !vCodeSvg.trim() ||
        !mobile.trim()
      ) {
        return this.$message({
          type: "error",
          message: "以上内容不能为空!"
        });
      }
      // 判断两次输入的密码是否一致
      if (password != passwordConfirm) {
        return this.$message({
          type: "error",
          message: "密码不一致"
        });
      }
      this.$http
        .post("users/register", {
          username,
          password,
          passwordConfirm,
          nickname,
          vCode,
          vCodeSvg,
          mobile
        })
        .then(res => {
          if (res.status == 200) {
            this.$message({
              type: "success",
              message: res.succMsg
            });
            localStorage.setItem('userinfo',res.data)
            localStorage.setItem('token',JSON.stringify(res.data.token))
            this.$router.push('/')
          }
        }).catch(err=>{
          console.dir(err);
          this.$message({
              type: "error",
              message: err.response.data.errMsg
            })
        })
    },
    getVCode() {
      this.$http.get("users/getVCode").then(res => {
        this.vCodeSvg = res;
      });
    }
  },
  created() {
    this.getVCode();
  }
};
</script>

<style lang="less" >
.register-container {
  width: 400px;
  margin: 100px auto;
  h1 {
    text-align: center;
    margin: 20px;
    color: #e92112;
    font-weight: bold;
  }

  .vCode-container {
    .el-input {
      width: 60%;
    }
    .v-code {
      float: right;
    }
  }

  .buttom-container {
    a {
      margin-left: 20px;
    }
  }
}
</style>