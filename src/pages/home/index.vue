<template>
  <div class="home-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title">收货人信息</template>
              <el-menu-item index="1-1">所有收货人信息</el-menu-item>
              <el-menu-item index="1-2">武汉收货人</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户安全">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">商家</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title">收货人信息</template>
              <el-menu-item index="2-1">所有收货人信息</el-menu-item>
              <el-menu-item index="2-2">武汉收货人</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户安全">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">商家</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu> 
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="title">
            <p>昵称:{{userinfo.nickname}}</p>
            <el-button type="danger" @click="logout">注销</el-button>
        </div>
              
          <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath){
        console.log(key, keyPath);
        switch (key) {
          case "1-1":
            //处理1-1的回调
            this.$router.push('/home/allReceiver')
            break; 
            case "1-2":
            //处理1-2的回调
            this.$router.push('/home/wuhanReceiver')
            break;       
          default:
            break;
        }
      },
      logout(){
        localStorage.removeItem('userinfo')
        localStorage.removeItem('token')
        this.$message({
            showClose: true,
            type: "success",
            message: '退出成功'
          })
          this.$router.push('/')
      }

    },
    data() {
      return {
        userinfo:JSON.parse(localStorage.getItem('userinfo') || '{}')
        
      }
    },
  }
</script>

<style lang="less" scoped>
  .home-container{
      .el-menu{
        border:0
    }
    .title{
          display: flex;
           p{
          margin: 20px 0;
          font-size: 22px;
        }
        button{
          height: 30px;
          text-align: center;
          margin-top: 15px;
          line-height: 30px;
          padding: 0 15px;
          margin-left: 20px;
        }
      }
  }
    
</style>
