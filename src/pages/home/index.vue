<template>
  <div class="home-container">
    <el-row class="tac">
      <el-col :span="6">
        <el-menu
          default-active="1-2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
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
      }
    }
  }
</script>

<style lang="less" scoped>

    .el-menu{
        border:0
    }
</style>
