<template>
    <div style="margin:20px 20px 0 20px">
        <el-row :gutter="20" style="margin-bottom:20px">
            <el-col :span="24" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <!-- card body -->
                    <div>
                        <el-form
                            :inline="true"
                            class="demo-form-inline"
                            :model="form"
                            ref="form"
                            size="normal"
                        >
                            <el-form-item label="主体名称">
                                <el-input
                                    v-model="form.name"
                                    placeholder="请输入"
                                    type="text"
                                    maxlength="30"
                                    show-word-limit
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="主体类型">
                                <el-select
                                    v-model="form.type"
                                    placeholder="请选择(个体户、合作社、企业)"
                                >
                                    <el-option
                                        label="个体户"
                                        value="个体"
                                    ></el-option>
                                    <el-option
                                        label="合作社"
                                        value="合作社"
                                    ></el-option>
                                    <el-option
                                        label="企业"
                                        value="企业"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="镇街">
                                <el-select
                                    v-model="form.town"
                                    placeholder="选择镇街"
                                    @change="changeSelect"
                                >
                                    <el-option
                                        v-for="(item, index) in townOptions"
                                        :key="index"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="村居">
                                <el-select
                                    v-model="form.townObj"
                                    placeholder="选择村居"
                                >
                                    <el-option
                                        v-for="(item, index) in typeOptions"
                                        :key="index"
                                        :label="item"
                                        :value="item"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="地址">
                                <el-input
                                    v-model="form.address"
                                    placeholder="请输入"
                                    type="text"
                                    maxlength="130"
                                    show-word-limit
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="联系人">
                                <el-input
                                    v-model="form.linkman"
                                    placeholder="请输入"
                                    type="text"
                                    maxlength="30"
                                    show-word-limit
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="联系电话">
                                <el-input
                                    v-model="form.number"
                                    placeholder="请输入"
                                    type="text"
                                    maxlength="11"
                                    show-word-limit
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="身份证号">
                                <el-input
                                    v-model="form.IDCard"
                                    placeholder="请输入"
                                    type="text"
                                    maxlength="18"
                                    show-word-limit
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="行业">
                                <el-checkbox-group v-model="form.profession">
                                    <el-checkbox
                                        label="种植业"
                                        name="type"
                                    ></el-checkbox>
                                    <el-checkbox
                                        label="渔业"
                                        name="type"
                                        checked="checked"
                                    ></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit"
                                    >查询</el-button
                                >
                                <el-button>重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="24" :offset="0">
                <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <!-- card body -->
                    <div>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column
                                prop="subjectName"
                                label="主体名称"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="subjectLinkman"
                                label="联系人"
                            >
                            </el-table-column>
                            <el-table-column prop="subjectTele" label="电话">
                            </el-table-column>
                            <el-table-column
                                prop="subjectTypeName"
                                label="主体类别"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="subjectOrgCode"
                                label="主题组织机构代码"
                            >
                            </el-table-column>
                            <el-table-column prop="subjectBase" label="基地">
                            </el-table-column>
                            <el-table-column
                                prop="subjectAddr"
                                label="主体地址"
                            >
                            </el-table-column>
                            <el-table-column
                                width="250px"
                                align="left"
                                :render-header="renderHeader"
                            >
                                <template slot-scope="scope">
                                    <el-button
                                        size="mini"
                                        type="text"
                                        @click="
                                            handleCheck(scope.$index, scope.row)
                                        "
                                        >查看</el-button
                                    >
                                    <el-button
                                        size="mini"
                                        type="text"
                                        @click="handle(scope.$index, scope.row)"
                                        >编辑</el-button
                                    >
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="block" style="text-align:right;margin-top:20px">
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
        <NewlyAdded ref="newadd"></NewlyAdded>
    </div>
</template>

<script>
import NewlyAdded from '../../modalbox/NewlyAdded.vue';
import { productionBase } from '@/api/reg';
export default {
    name: 'ProductionBase',
    data() {
        return {
            total: 0,
            pageNum: 1,
            pageSize: 10,
            tableData: [],
            form: {
                name: '',
                type: '',
                town: '',
                townObj: '',
                address: '',
                linkman: '',
                number: '',
                IDCard: '',
                profession: [],
            },
            townOptions: [
                '桂城街道',
                '九江镇',
                '西樵镇',
                '丹灶镇',
                '狮山镇',
                '大沥镇',
                '里水镇',
            ],
            townObj: {
                桂城街道: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                ],
                九江镇: [
                    '11',
                    '22',
                    '33',
                    '44',
                    '55',
                    '66',
                    '77',
                    '87',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                ],
                西樵镇: [
                    '112',
                    '221',
                    '3123',
                    '4123',
                    '5',
                    '611',
                    '722',
                    '82',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                ],
                丹灶镇: [
                    '1',
                    '2123',
                    '3123',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14123',
                    '15',
                    '16',
                ],
                狮山镇: [
                    '1',
                    '2',
                    '3',
                    '4123',
                    '5',
                    '6123',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                ],
                大沥镇: [
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7123',
                    '8',
                    '9',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                ],
                里水镇: [
                    '1',
                    '2123',
                    '3',
                    '41',
                    '15',
                    '61',
                    '7111',
                    '8',
                    '9123',
                    '10',
                    '11',
                    '12',
                    '13',
                    '14',
                    '15',
                    '16',
                ],
            },
            typeOptions: [],
        };
    },
    created() {
        this.tableD();
    },
    components: { NewlyAdded },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val;
            // console.log(`每页 ${val} 条`);
            this.tableD(this.pageNum, val);
        },
        handleCurrentChange(val) {
            this.pageNum = val;
            // console.log(`当前页: ${val}`);
            this.tableD(val, this.pageSize);
        },
        async tableD(aa = 1, bb = 10) {
            const { data } = await productionBase(aa, bb);
            // console.log(data.data.list[0].subjectName);
            this.tableData = data.data.list.concat();
            this.total = data.data.total;
        },
        changeSelect() {
            for (const k in this.townOptions) {
                if (this.form.town === this.townOptions[k]) {
                    this.typeOptions = this.townObj[this.form.town];
                }
            }
        },
        renderHeader() {
            return (
                <div>
                    <el-button type="primary" size="mini" onClick={this.newAdd}>
                        新增
                    </el-button>
                    <el-button type="warning" size="mini">
                        导出
                    </el-button>
                    <el-button type="danger" size="mini">
                        导入
                    </el-button>
                </div>
            );
        },
        handleCheck(index, row) {
            console.log(index, row);
        },
        onSubmit() {},
        newAdd() {
            this.$refs.newadd.dialogFormVisible = true;
        },
    },
};
</script>

<style></style>
