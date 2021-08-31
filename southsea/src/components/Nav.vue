<template>
  <div>
    <el-container>
      <el-header>
        <div class="nav">
          <div class="logo">
            <a href="#">渔业资源管理系统</a>
          </div>
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#0086ff"
            text-color="#eeeeee"
            active-text-color="#fff"
            router
          >
            <el-menu-item index="/Map">GIS控制台</el-menu-item>
            <el-menu-item index="2">计划任务管理</el-menu-item>
            <el-menu-item index="3">生产主体库</el-menu-item>
            <el-menu-item index="4">基础信息管理</el-menu-item>
          </el-menu>
          <div class="user">
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <div class="drop-down">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  镇街信息员：18507161949<i
                    class="el-icon-arrow-down el-icon--right"
                  ></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>修改头像</el-dropdown-item>
                  <el-dropdown-item>修改密码</el-dropdown-item>
                  <el-dropdown-item divided>切换到种植系统</el-dropdown-item>
                  <el-dropdown-item divided>退出</el-dropdown-item>
                  <el-dropdown-item divided>清除缓存</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
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
* {
  margin: 0;
  padding: 0;
}
.el-header {
  padding: 0;
}
.el-menu-demo {
  flex: 1;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0086ff;
  height: 60px;
}
.logo {
  width: 400px;
  text-align: left;
  margin-left: 40px;
}
.logo a {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
}
.user {
  display: flex;
  margin-right: 10px;
}
.drop-down {
  line-height: 40px;
  margin-left: 10px;
  cursor: pointer;
}
.el-dropdown-link {
  color: #fff;
}
.el-dropdown-menu__item{
width: 150px;
}
</style>