<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"><div class="grid-content bg-purple">
        <router-link exact to="/" class="navbar-brand">渔业资源管理系统</router-link>
        </div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple">
         <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#eeeeee"
      active-text-color="#fff"
    >
      <el-menu-item index="1">GIS控制台</el-menu-item>
      <el-menu-item index="2">计划任务管理器</el-menu-item>
      <el-menu-item index="3">生产主体库</el-menu-item>
      <el-menu-item index="4">基础信息管理</el-menu-item>
    </el-menu>
        </div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">
        
        </div></el-col>
    </el-row>
   
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.el-row {
    margin-bottom: 20px;
    background-color: #0086ff;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .navbar-brand{
    height: 60px;
    line-height: 60px;
    text-decoration: none;
    color: #000;
  }
  .el-menu-demo{
    background-color: #0086ff;
  }
</style>