<template>
    <div style="width: 100%;">
        <!-- 顶部按钮 -->
        <div class="content-top">
            <el-row>
                <el-button type="primary"
                    >区镇级管理员/创建任务计划
                    <i class="el-icon-arrow-right el-icon--right"></i>
                </el-button>

                <el-button type="primary">
                    <i class="el-icon-share"></i>
                    任务执行/数据标注/村居采集,镇/街区支持录入
                    <i class="el-icon-arrow-right el-icon--right"></i>
                </el-button>

                <el-button type="primary">
                    <i class="el-icon-s-opportunity"></i>
                    任务执行/数据标注/村居采集,镇/街区支持录入
                </el-button>
            </el-row>
        </div>
        <!-- 地图模块 -->
        <div class="map-content">
            <!-- 搜索按钮 -->
            <el-button type="primary" icon="el-icon-search" class="map-search"
                >搜索</el-button
            >
            <!-- 筛选框 -->
            <div class="table" ref="filter">
                <table>
                    <tr>
                        <td>当前辖区</td>
                        <td>
                            <el-select
                                v-model="options.value"
                                size="mini"
                                class="first-card"
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                            -
                            <el-select
                                v-model="options1.value"
                                size="mini"
                                class="first-card"
                            >
                                <el-option
                                    v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>图斑状态</td>
                        <td>
                            <el-select v-model="state.value" size="mini">
                                <el-option
                                    v-for="itemState in state"
                                    :key="itemState.value"
                                    :label="itemState.label"
                                    :value="itemState.value"
                                >
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>任务模式</td>
                        <td>
                            <el-select v-model="model.value" size="mini">
                                <el-option
                                    v-for="itemModel in model"
                                    :key="itemModel.value"
                                    :label="itemModel.label"
                                    :value="itemModel.value"
                                >
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>当前任务</td>
                    </tr>
                </table>
            </div>
            <el-button
                type="primary"
                size="mini"
                class="btn-table"
                @click="changeTop"
            >
                <i
                    :class="[
                        isShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down',
                    ]"
                    ref="icon"
                ></i>
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Map',
    data() {
        return {
            isShow: true,
            options: [
                {
                    value: '选项1',
                    label: '大沥镇',
                },
            ],
            options1: [
                {
                    value: '选项1',
                    label: '全部',
                },
            ],
            state: [
                {
                    value: '选项1',
                    label: '全部',
                },
                {
                    value: '选项2',
                    label: '已采集',
                },
                {
                    value: '选项3',
                    label: '未采集',
                },
            ],
            model: [
                {
                    value: '选项1',
                    label: '任务执行模式',
                },
                {
                    value: '选项2',
                    label: '任务查看模式',
                },
            ],
        };
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        changeTop() {
            if (this.isShow) {
                this.$refs.filter.style.top = '-260px';
                document.querySelector('.btn-table').style.top = '2px';
            } else {
                this.$refs.filter.style.top = '0';
                document.querySelector('.btn-table').style.top = '250px';
            }
            this.isShow = !this.isShow;
        },
    },
};
</script>

<style scope>
.content-top {
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: start;
    padding-left: 10px;
    height: 70px;
    align-items: center;
    box-sizing: border-box;
}
.content-top button {
    margin: 10px 10px;
}
.map-content {
    position: relative;
    height: calc(100% - 70px);
    overflow: hidden;
}
.map-search {
    position: absolute;
    right: 10px;
    top: 10px;
}
.first-card {
    width: 93px;
}
.table {
    position: absolute;
    top: 0;
    left: 0;
    width: 320px;
    padding: 20px 0 20px 20px;
    background-color: rgba(1, 1, 1, 0.7);
    transition: all, 1.2s;
    border-radius: 5px;
}
.table tr {
    color: #fff;
    font-size: 14px;
    height: 50px;
}
.table tr td {
    padding-right: 20px;
}
.btn-table {
    position: absolute;
    left: 2px;
    top: 250px;
    transition: all, 1.2s;
}
.el-card__body {
    padding: 10px 0;
}
.is-always-shadow {
    margin-top: 10px;
}
</style>
