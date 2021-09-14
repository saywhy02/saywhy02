<template>
    <div>
        <el-container>
            <!-- 主体内容--侧边栏 -->
            <el-aside width="300px">
                <el-tabs v-model="activeName" :stretch="true">
                    <el-tab-pane label="采集中" name="first">
                        <el-row :gutter="20">
                            <el-col :span="22" :offset="1">
                                <el-card
                                    shadow="always"
                                    :body-style="{ padding: '10px' }"
                                >
                                    <i
                                        class="el-icon-s-opportunity"
                                        style="color: green"
                                    ></i
                                    >您当前没有任何的任务
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="已到期" name="second">
                        <el-col :span="22" :offset="1">
                            <el-card
                                shadow="always"
                                :body-style="{ padding: '10px' }"
                            >
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
                        <div id="main" ref="myChart"></div>
                    </el-tab-pane>
                </el-tabs>
            </el-aside>
            <!-- 主体内容--地图 -->
            <el-main>
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
                    <el-button
                        type="primary"
                        icon="el-icon-search"
                        class="map-search"
                        @click="search"
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
                                    <el-select
                                        v-model="state.value"
                                        size="mini"
                                    >
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
                                    <el-select
                                        v-model="model.value"
                                        size="mini"
                                    >
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
                                isShow
                                    ? 'el-icon-arrow-up'
                                    : 'el-icon-arrow-down',
                            ]"
                            ref="icon"
                        ></i>
                    </el-button>
                    <!-- 模拟地图列表 -->
                    <el-row
                        :gutter="20"
                        style="width: 100%; position:absolute;left:10px;top:100px;"
                    >
                        <el-col :span="24" :offset="0">
                            <el-card
                                shadow="always"
                                :body-style="{
                                    padding: '20px',
                                }"
                            >
                                <div>
                                    <el-table :data="MapData">
                                        <el-table-column
                                            prop="landCode"
                                            label="图斑ID"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="landName"
                                            label="地塘块命名"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="landTownName"
                                            label="镇街"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="landVillageName"
                                            label="村居"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="mu"
                                            label="面积(亩)"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="landTypeName"
                                            label="地块类型"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="subjectNames"
                                            label="所属主体"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="landProductName"
                                            label="农场品分类"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="landOtherType"
                                            label="品种"
                                        >
                                        </el-table-column>
                                        <el-table-column label="操作">
                                            <template>
                                                <el-button
                                                    size="mini"
                                                    type="text"
                                                    @click="searchMap"
                                                    >编辑</el-button
                                                >
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                                <div
                                    class="block"
                                    style="text-align:right;margin-top:20px"
                                >
                                    <el-pagination
                                        background
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :page-sizes="[5, 10, 20, 30, 40, 200]"
                                        :current-page="pageNum"
                                        :page-size="pageSize"
                                        layout="total, sizes, prev, pager, next, jumper"
                                        :total="total"
                                    >
                                    </el-pagination>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </el-main>
            <Diolog ref="state"></Diolog>
            <SearchDialog ref="search"></SearchDialog>
        </el-container>
    </div>
</template>

<script>
import Diolog from '../../modalbox/Dialog.vue';
import SearchDialog from '../../modalbox/SearchDialog.vue';
import { productionInformation } from '@/api/reg';
export default {
    name: 'Map',
    components: { Diolog, SearchDialog },
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            activeName: 'first',
            isShow: true,
            value: '',
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
            MapData: [],
            total: 0,
            pageNum: 1,
            pageSize: 10,
        };
    },
    mounted() {
        Object.defineProperty(document.getElementById('main'), 'clientWidth', {
            get: function() {
                return 300;
            },
        });
        Object.defineProperty(document.getElementById('main'), 'clientHeight', {
            get: function() {
                return 300;
            },
        });
        this.drawLine();
    },
    methods: {
        // handleSelect(key, keyPath) {
        //   console.log(key, keyPath);
        // },
        // handleClick(tab, event) {
        //   console.log(tab, event);
        // },
        // onSubmit() {
        //   console.log("submit!");
        // },
        handleSizeChange(val) {
            this.pageSize = val;
            // console.log(`每页 ${val} 条`);
            this.mapD(this.pageNum, val);
        },
        handleCurrentChange(val) {
            this.pageNum = val;
            // console.log(`当前页: ${val}`);
            this.mapD(val, this.pageSize);
        },
        async mapD(aa = 1, bb = 10) {
            const { data } = await productionInformation(aa, bb);
            // console.log(data.data.list[7]);
            this.MapData = data.data.list.concat();
            this.total = data.data.total;
        },
        search() {
            this.$refs.search.dialogTableVisible = true;
        },
        searchMap() {
            this.$refs.state.dialogFormVisible = true;
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
        // 鱼塘数量
        drawLine() {
            var myChart = this.$echarts.init(this.$refs.myChart);
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
        renderHeader(h) {
            return (
                <div>
                    <el-button type="primary" size="mini" onClick={this.newAdd}>
                        查看
                    </el-button>
                </div>
            );
        },
    },
    created() {
        this.mapD();
    },
};
</script>

<style scoped>
.el-aside {
    border-right: 1px solid #ccc;
    height: calc(100vh - 60px);
    overflow: scroll;
}
.el-aside::-webkit-scrollbar {
    display: none;
}
.el-main {
    padding: 0;
}
.content-top {
    width: 100%;
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
    overflow: scroll;
}
.map-search {
    position: absolute;
    right: 10px;
    top: 10px;
}
.first-card {
    width: 93px !important;
}
.table {
    position: absolute;
    top: 0;
    left: 0;
    width: 320px;
    padding: 20px 0 20px 20px;
    background-color: rgba(1, 1, 1, 0.7);
    transition: all, 1.2s;
    z-index: 999;
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
    z-index: 999;
}
.el-aside .is-always-shadow {
    margin: 10px 0;
}
</style>
