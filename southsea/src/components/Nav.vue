<template>
    <div>
        <el-container>
            <!-- 导航栏 -->
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
                        <el-menu-item index="/">计划任务管理</el-menu-item>
                        <el-menu-item index="/DataResource/ProductionBase"
                            >生产主体库</el-menu-item
                        >
                        <el-menu-item
                            index="/DataResource/ProductionInformationBase"
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
                                    <el-dropdown-item divided
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
            <!-- 主体内容 -->
            <el-container>
                <!-- 主体内容--侧边栏 -->
                <el-aside :span="6">
                    <el-tabs
                        v-model="activeName"
                        @tab-click="handleClick"
                        :stretch="true"
                    >
                        <el-tab-pane label="采集中" name="first">
                            <el-col :span="22" :offset="1">
                                <el-card shadow="always">
                                    <i
                                        class="el-icon-s-opportunity"
                                        style="color: green"
                                    ></i
                                    >您当前没有任何的任务
                                </el-card>
                            </el-col>
                        </el-tab-pane>
                        <el-tab-pane label="已到期" name="second">
                            <el-col :span="22" :offset="1">
                                <el-card shadow="always">
                                    <i
                                        class="el-icon-s-opportunity"
                                        style="color: green"
                                    ></i
                                    >您当前没有到期任务
                                </el-card>
                            </el-col>
                        </el-tab-pane>
                        <el-tab-pane label="数据查看" name="third">
                            <!-- 统计图容器 -->
                            <div
                                ref="myChart"
                                style="width: 300px; height: 270px"
                            ></div>
                        </el-tab-pane>
                    </el-tabs>
                </el-aside>
                <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'Map',
    data() {
        return {
            activeName: 'first',
            isShow: true,
            value: '',
        };
    },
    mounted() {
        this.drawLine();
    },

    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        // 鱼塘数量
        drawLine() {
            var myChart = this.$echarts.init(this.$refs.myChart);
            console.log(this.$refs.myChart);
            myChart.setOption({
                title: {
                    text: '鱼塘总数量：441',
                    subtext: '各二级地级数量',
                    left: 'left',
                },
                tooltip: {
                    trigger: 'item',
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        data: [{ value: 411, name: '鱼塘' }],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: '#5470c6',
                            },
                        },
                    },
                ],
            });
        },
    },
};
</script>

<style>
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
.el-aside {
    border-right: 1px solid #ccc;
    height: calc(100vh - 60px);
    overflow: scroll;
}
/* .el-tabs__content {
    height: 80vh;
} */
.el-aside::-webkit-scrollbar {
    display: none;
}
</style>
