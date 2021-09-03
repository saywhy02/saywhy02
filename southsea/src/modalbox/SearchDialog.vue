<template>
    <div>
        <el-dialog title="搜索" :visible.sync="dialogTableVisible">
            <el-tabs v-model="activeName">
                <el-tab-pane label="主体搜索" name="first">
                    <div class="el-col el-col-24">
                        <el-card class="box-card">
                            <el-form :inline="true" class="demo-form-inline">
                                <el-form-item
                                    label="主体名称"
                                    label-width="70px"
                                >
                                    <el-input placeholder="请输入"></el-input>
                                </el-form-item>
                                <el-form-item label="主体类型">
                                    <el-select
                                        v-model="form.region"
                                        placeholder="请选择(个体户、合作户、企业)"
                                    >
                                        <el-option
                                            label="全部"
                                            value="all"
                                        ></el-option>
                                        <el-option
                                            label="个体户"
                                            value="self"
                                        ></el-option>
                                        <el-option
                                            label="合作户"
                                            value="coop"
                                        ></el-option>
                                        <el-option
                                            label="企业"
                                            value="ent"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="行业">
                                    <el-checkbox-group v-model="form.type">
                                        <el-checkbox
                                            label="种植业"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="渔业"
                                            checked="checked"
                                        ></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="选择镇街">
                                    <el-select
                                        v-model="form.region"
                                        placeholder="选择镇街"
                                    >
                                        <el-option
                                            label="全部"
                                            value="all"
                                        ></el-option>
                                        <el-option
                                            label="桂林街道"
                                            value="guilin"
                                        ></el-option>
                                        <el-option
                                            label="九江镇"
                                            value="jiujiang"
                                        ></el-option>
                                        <el-option
                                            label="西樵镇"
                                            value="xiqiao"
                                        ></el-option>
                                        <el-option
                                            label="丹灶镇"
                                            value="danzao"
                                        ></el-option>
                                        <el-option
                                            label="狮山镇"
                                            value="shishan"
                                        ></el-option>
                                        <el-option
                                            label="大沥镇"
                                            value="xiqiao"
                                        ></el-option>
                                        <el-option
                                            label="里水镇"
                                            value="lishui"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="选择镇街">
                                    <el-select
                                        v-model="form.region"
                                        placeholder="选择镇街"
                                    >
                                        <el-option
                                            label="全部"
                                            value="all"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-button type="primary">查询</el-button>
                            </el-form>
                        </el-card>
                    </div>
                    <div class="el-col el-col-24">
                        <el-card shadow="never">
                            <el-table style="width: 100%">
                                <el-table-column
                                    prop="date"
                                    label="主体名称"
                                    width="150"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="联系人"
                                    width="120"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="province"
                                    label="主体地址"
                                    width="120"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="city"
                                    label="电话"
                                    width="120"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="city"
                                    label="地块数量"
                                    width="120"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="city"
                                    label="基地"
                                    width="120"
                                >
                                </el-table-column>
                                <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="100"
                                >
                                    <template>
                                        <el-button type="text">查看</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                background
                                :page-sizes="[5, 10, 20, 30, 40]"
                                :page-size="5"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400"
                            >
                            </el-pagination>
                        </el-card>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="图斑搜索" name="second">
                    <div class="el-col el-col-24">
                        <el-card class="box-card">
                            <el-form :inline="true" class="demo-form-inline">
                                <el-form-item label="图斑ID" label-width="70px">
                                    <el-input placeholder="请输入"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="地塘块命名"
                                    label-width="100px"
                                >
                                    <el-input placeholder="请输入"></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="所属主体"
                                    label-width="70px"
                                >
                                    <el-input placeholder="请输入"></el-input>
                                </el-form-item>
                                <el-form-item label="农产品" label-width="70px">
                                    <el-input placeholder="请输入"></el-input>
                                </el-form-item>
                                <el-form-item label="选择镇街">
                                    <el-select
                                        v-model="form.region"
                                        placeholder="选择镇街"
                                    >
                                        <el-option
                                            label="全部"
                                            value="all"
                                        ></el-option>
                                        <el-option
                                            label="桂林街道"
                                            value="guilin"
                                        ></el-option>
                                        <el-option
                                            label="九江镇"
                                            value="jiujiang"
                                        ></el-option>
                                        <el-option
                                            label="西樵镇"
                                            value="xiqiao"
                                        ></el-option>
                                        <el-option
                                            label="丹灶镇"
                                            value="danzao"
                                        ></el-option>
                                        <el-option
                                            label="狮山镇"
                                            value="shishan"
                                        ></el-option>
                                        <el-option
                                            label="大沥镇"
                                            value="xiqiao"
                                        ></el-option>
                                        <el-option
                                            label="里水镇"
                                            value="lishui"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="选择村居">
                                    <el-select
                                        v-model="form.region"
                                        placeholder="选择镇街"
                                    >
                                        <el-option
                                            label="全部"
                                            value="all"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-button
                                    type="primary"
                                    @click="dialogTableVisible = true"
                                    >查询</el-button
                                >
                            </el-form>
                        </el-card>
                    </div>
                    <div class="el-col el-col-24">
                        <el-card shadow="never">
                            <el-table style="width: 100%">
                                <el-table-column
                                    prop="date"
                                    label="图斑ID"
                                    width="150"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="name"
                                    label="地塘块命名"
                                    width="120"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="province"
                                    label="镇街"
                                    width="120"
                                >
                                </el-table-column>
                                <el-table-column
                                    prop="city"
                                    label="村居"
                                    width="120"
                                >
                                </el-table-column>
                                <el-table-column label="面积" width="120">
                                </el-table-column>
                                <el-table-column label="地块类型" width="120">
                                </el-table-column>
                                <el-table-column label="所属主体" width="120">
                                </el-table-column>
                                <el-table-column label="地类" width="120">
                                </el-table-column>
                                <el-table-column label="品种" width="120">
                                </el-table-column>
                                <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="120"
                                >
                                    <template>
                                        <el-button type="text" size="small"
                                            >编辑</el-button
                                        >
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                                background
                                :page-sizes="[5, 10, 20, 30]"
                                :page-size="5"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400"
                            >
                            </el-pagination>
                        </el-card>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'SearchBtn',
    data() {
        return {
            form: {
                region: '',
                type: [],
            },
            dialogTableVisible: false,
            activeName: 'first',
        };
    },
};
</script>
<style scoped>
.el-form--inline .el-form-item {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
}
.search {
    position: absolute;
    right: 5%;
    top: 15%;
}
.el-dialog {
    width: 70%;
}
.MainSearch .el-card {
    width: 98%;
    margin: 15px auto 0;
}
.el-card__body {
    padding: 20px;
}
.el-card {
    width: 98%;
    margin: 15px auto 0;
}
.el-pagination {
    margin-top: 20px;
    text-align: center;
}
</style>
