<template>
    <div>
        <el-container>
            <!-- 导航栏 -->
            <el-header>
                <div class="nav">
                    <div class="logo">
                        <a href="javascript:void(0)">渔业资源管理系统</a>
                    </div>
                    <el-menu
                        :default-active="$route.path"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#0086ff"
                        text-color="#eeeeee"
                        active-text-color="#fff"
                        router
                    >
                        <el-menu-item index="/Map">GIS控制台</el-menu-item>
                        <el-menu-item index="/TaskPlann/MyTask/MyTaskList"
                            >计划任务管理</el-menu-item
                        >
                        <el-menu-item index="/DataResource/ProductionBase"
                            >生产主体库</el-menu-item
                        >
                        <el-menu-item index="/BasicInfo/DivisionManagement"
                            >基础信息管理</el-menu-item
                        >
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
                                    <el-dropdown-item
                                        >个人信息</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        >修改头像</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        >修改密码</el-dropdown-item
                                    >
                                    <el-dropdown-item divided
                                        >切换到种植系统</el-dropdown-item
                                    >
                                    <el-dropdown-item
                                        @click.native="quit"
                                        divided
                                        >退出</el-dropdown-item
                                    >
                                    <el-dropdown-item divided
                                        >清除缓存</el-dropdown-item
                                    >
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                </div>
            </el-header>
            <router-view></router-view>
            <!-- 主体内容 -->
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'Map',
    data() {
        return {};
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        onSubmit() {
            console.log('submit!');
        },
        quit() {
            this.$router.push({
                path: '/login',
            });
        },
    },
};
</script>

<style scoped>
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
    font-size: 16px;
    color: #fff;
    text-decoration: none;
}
.user {
    display: flex;
    margin-right: 15px;
}
.drop-down {
    line-height: 40px;
    margin-left: 10px;
    cursor: pointer;
}
.el-dropdown-link {
    color: #fff;
}
.el-dropdown-menu__item {
    width: 150px;
}
</style>
