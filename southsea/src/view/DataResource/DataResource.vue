<template>
    <div>
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="300px">
                <el-menu
                    :default-active="$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    router
                >
                    <el-menu-item index="/DataResource/ProductionBase">
                        <i class="el-icon-office-building"></i>
                        <span slot="title">生产主体库</span>
                    </el-menu-item>
                    <el-menu-item
                        index="/DataResource/ProductionInformationBase"
                    >
                        <i class="el-icon-data-board"></i>
                        <span slot="title">鱼塘生产信息库</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- 页面主体 -->
            <el-main>
                <!-- 面包屑 -->
                <div class="breadcrumb">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item
                            v-for="(item, index) in arrList"
                            :key="index"
                            >{{ item }}</el-breadcrumb-item
                        >
                    </el-breadcrumb>
                </div>

                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'DataResource',
    data() {
        return {
            arrList: [],
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        hand() {
            let arr = [];
            this.$route.matched.forEach((v) => {
                arr.push(v.meta.title);
                this.arrList = arr;
            });
        },
    },
    watch: {
        $route() {
            let arr = [];
            this.$route.matched.forEach((v) => {
                arr.push(v.meta.title);
                this.arrList = arr;
            });
        },
    },
    created() {
        this.hand();
    },
};
</script>

<style scoped>
.el-aside {
    border-right: 1px solid #ccc;
    height: auto;
    overflow: scroll;
}
.el-aside::-webkit-scrollbar {
    display: none;
}
.el-menu-item {
    text-align: left;
}
.el-main {
    padding: 0;
    height: calc(100vh - 60px);
    overflow: scroll;
}
.el-menu {
    border-right: 0;
}
.breadcrumb {
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #ccc;
    font-weight: 700;
}
</style>
