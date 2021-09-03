<template>
    <div>
        <!-- 外层模态框 -->
        <el-dialog
            width="75%"
            title="图斑信息"
            :visible.sync="dialogFormVisible"
            class="el-dialog-title"
        >
            <!-- 表单以及图片上传 -->
            <el-row style="display: flex">
                <el-col :span="18">
                    <!-- 表单 -->
                    <el-form
                        :inline="true"
                        :model="formInline"
                        class="demo-form-inline elform"
                    >
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">图斑ID</label>
                            <el-input
                                placeholder="NHQ83027"
                                autocomplete="off"
                                class="elfitem-input"
                                disabled
                            ></el-input>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">池塘块命名</label>
                            <el-input
                                autocomplete="off"
                                class="elfitem-input"
                                disabled
                            ></el-input>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">镇街</label>
                            <el-select v-model="formInline.region">
                                <el-option
                                    label="区域一"
                                    value="shanghai"
                                ></el-option>
                                <el-option
                                    label="区域二"
                                    value="beijing"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">村居</label>
                            <el-select v-model="formInline.region">
                                <el-option
                                    label="区域一"
                                    value="shanghai"
                                ></el-option>
                                <el-option
                                    label="区域二"
                                    value="beijing"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">村小组/经济社</label>
                            <el-input
                                autocomplete="off"
                                class="elfitem-input"
                            ></el-input>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">大棚</label>
                            <el-checkbox-group
                                v-model="formInline.type"
                                style="width: 233px"
                            >
                                <el-checkbox name="type">无</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">土地性质</label>
                            <el-input
                                autocomplete="off"
                                class="elfitem-input"
                                disabled
                            ></el-input>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">土地现状</label>
                            <el-select v-model="formInline.region" disabled>
                                <el-option
                                    label="区域一"
                                    value="shanghai"
                                ></el-option>
                                <el-option
                                    label="区域二"
                                    value="beijing"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">村居审查现状</label>
                            <!-- 没有双向数据绑定和value值的话会报错 -->
                            <el-select v-model="formInline.region">
                                <el-option
                                    label="区域一"
                                    value="shanghai"
                                ></el-option>
                                <el-option
                                    label="区域二"
                                    value="beijing"
                                ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">品种</label>
                            <el-input
                                autocomplete="off"
                                class="elfitem-input"
                            ></el-input>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">年产量</label>
                            <div class="yyield">
                                <el-input
                                    autocomplete="off"
                                    class="elfitem-yyield-input"
                                ></el-input>
                                <el-select v-model="formInline.region">
                                    <el-option
                                        label="区域一"
                                        value="shanghai"
                                    ></el-option>
                                    <el-option
                                        label="区域二"
                                        value="beijing"
                                    ></el-option>
                                </el-select>
                            </div>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">面积（亩）</label>
                            <el-input
                                disabled
                                autocomplete="off"
                                class="elfitem-input"
                            ></el-input>
                        </el-form-item>
                        <el-form-item class="elfitem">
                            <label class="elfitem-label">地块坐标</label>
                            <el-input
                                value="123456789.456894651..4.54.5.45.454.6.46.746.4."
                                class="input-with-select elfitem-input"
                                :disabled="true"
                            >
                                <el-button slot="append" @click="lotn"
                                    >定位</el-button
                                >
                            </el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="6">
                    <!-- 右侧上传图片 -->
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-button
                            style="width: 100%; margin-top: 15px"
                            type="primary"
                            >图片上传</el-button
                        >
                    </el-upload>
                </el-col>
            </el-row>

            <!-- 选择主体 -->
            <el-card class="elcard">
                <div slot="header" class="clearfix">
                    <span>所有主体</span>
                    <!-- 新增主体模态框 -->
                    <el-dialog
                        width="50%"
                        title="关联主体"
                        :visible.sync="innerVisible"
                        append-to-body
                    >
                        <el-dialog
                            width="78%"
                            title="查询主体"
                            :visible.sync="dialogVisible"
                            append-to-body
                        >
                            <el-card
                                shadow="always"
                                :body-style="{ padding: '20px' }"
                            >
                                <el-input
                                    style="width: 380px;margin-right: 10px;"
                                    type="text"
                                    placeholder="请输入主体名称（模糊搜索）"
                                ></el-input>
                                <el-button type="primary">查询</el-button>
                                <el-button type="info">新增生产主体</el-button>
                            </el-card>
                        </el-dialog>
                        <el-form
                            label-position="top"
                            :model="form"
                            label-width="80px"
                        >
                            <el-form-item label="选择主体">
                                <el-input @focus="choicedialog"></el-input>
                                <!-- 选择主体模态框 -->
                            </el-form-item>
                            <el-form-item label="占用面积（亩）">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item label="年产值（万元）">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-col :span="2">活动时间</el-col>
                                <!-- 开始和结束日期需要双向绑定数据  具体在form表单里看吧 -->
                                <el-col :span="8">
                                    <el-date-picker
                                        type="date"
                                        placeholder="开始日期"
                                        v-model="form.date1"
                                        style="width: 100%"
                                    ></el-date-picker>
                                </el-col>
                                <el-col
                                    class="line"
                                    style="text-align: center"
                                    :span="1"
                                    >至</el-col
                                >
                                <el-col :span="8">
                                    <el-date-picker
                                        type="date"
                                        placeholder="结束日期"
                                        v-model="form.date2"
                                        style="width: 100%"
                                    ></el-date-picker>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="承包年限">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item label="所属基地">
                                <el-input></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="innerVisible = false"
                                >取 消</el-button
                            >
                            <el-button
                                type="primary"
                                @click="innerVisible = false"
                                >确 定</el-button
                            >
                        </span>
                    </el-dialog>

                    <el-button
                        style="float: right; padding: 5px 10px; font-size: 12px"
                        type="primary"
                        @click="innerVisible = true"
                        >新增主体</el-button
                    >
                </div>
                <el-table border style="width: 100%">
                    <el-table-column
                        fixed
                        prop="date"
                        label="主体名称"
                        width="200"
                    >
                    </el-table-column>
                    <el-table-column prop="name" label="基础/土名" width="200">
                    </el-table-column>
                    <el-table-column
                        prop="province"
                        label="占地面积（亩）"
                        width="120"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="city"
                        label="年产值（万元）"
                        width="120"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="承包开始时间"
                        width="120"
                    >
                    </el-table-column>
                    <el-table-column
                        prop="zip"
                        label="承包结束时间"
                        width="120"
                    >
                    </el-table-column>
                    <el-table-column prop="zip" label="承包年限" width="120">
                    </el-table-column>
                    <el-table-column prop="zip" label="操作" width="120">
                    </el-table-column>
                </el-table>
            </el-card>
            <!-- 更新  审核 -->
            <el-card class="elcards">
                <el-row class="elrow">
                    <el-col>
                        <div class="elcol-header">更新信息</div>
                        <div>更新时间：</div>
                        <div>更新人：</div>
                    </el-col>
                    <el-col>
                        <div class="elcol-header">
                            审核信息
                            <el-button
                                style="padding: 5px 10px; font-size: 12px; margin-left: 15px"
                                type="primary"
                                @click="shVisible = true"
                                >审核</el-button
                            >
                            <!-- 审核模态框 -->
                            <el-dialog
                                width="30%"
                                title="图斑地块审核"
                                :visible.sync="shVisible"
                                append-to-body
                            >
                                <el-form
                                    label-position="right"
                                    label-width="80px"
                                >
                                    <el-form-item label="图斑ID">
                                        <el-input disabled></el-input>
                                    </el-form-item>
                                    <el-form-item label="地块名">
                                        <el-input disabled></el-input>
                                    </el-form-item>
                                    <el-form-item label="地块面积">
                                        <el-input disabled></el-input>
                                    </el-form-item>
                                    <el-form-item label="镇名">
                                        <el-input disabled></el-input>
                                    </el-form-item>
                                    <el-form-item label="村名">
                                        <el-input disabled></el-input>
                                    </el-form-item>
                                    <el-form-item label="审核状态">
                                        <el-radio v-model="radio" label="1"
                                            >通过</el-radio
                                        >
                                        <el-radio v-model="radio" label="2"
                                            >不通过</el-radio
                                        >
                                    </el-form-item>
                                    <el-form-item label="审核描述">
                                        <el-input type="textarea"></el-input>
                                    </el-form-item>
                                </el-form>
                                <span slot="footer" class="dialog-footer">
                                    <el-button
                                        type="primary"
                                        @click="shVisible = false"
                                        >确 定</el-button
                                    >
                                </span>
                            </el-dialog>
                        </div>
                        <div>审核提交时间：</div>
                        <div>审核人：</div>
                        <div>审核状态：</div>
                        <div>审核意见：</div>
                    </el-col>
                </el-row>
            </el-card>
            <!-- 页脚按钮 -->
            <div slot="footer" center class="dialog-footer">
                <el-button
                    class="dialog-footer-btn"
                    type="primary"
                    @click="dialogFormVisible = false"
                    >提交采集信息</el-button
                >
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            innerVisible: false,
            dialogVisible: false,
            formInline: {
                user: '',
                region: '',
                type: '',
            },
            form: {
                data1: '',
                data2: '',
            },
            formLabelWidth: '120px',
            imageUrl: '../assets/zwphoto.jpg',
            shVisible: false,
            radio: '1',
        };
    },
    methods: {
        //定位提示框
        lotn() {
            const h = this.$createElement;
            this.$msgbox({
                title: '图斑定位',
                message: h('p', null, [
                    h('span', null, '此操作会关闭当前界面回到地图界面 '),
                ]),
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                        instance.confirmButtonLoading = true;
                        instance.confirmButtonText = '执行中...';
                        setTimeout(() => {
                            done();
                            setTimeout(() => {
                                instance.confirmButtonLoading = false;
                            }, 300);
                        }, 1000);
                    } else {
                        done();
                    }
                },
            }).then(
                (action) => {
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action,
                    });
                },
                () => {}, // 添加 取消 时的处理
            );
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        //图片上传
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        choicedialog() {
            this.dialogVisible = true;
        },
    },
    mounted() {
        //   this.handleAvatarSuccess()
    },
};
</script>
<style>
.el-dialog-title {
    text-align: left;
    min-width: 1200px;
}
.elform {
    flex-wrap: wrap;
    align-items: center;
    margin-right: 0;
}
.elfitem {
    /* width: 49%; */
    margin-right: 0;
}
.elfitem-label {
    width: 140px;
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    padding-right: 10px;
    box-sizing: border-box;
}
.elfitem-input {
    width: 220px;
}
.yyield {
    width: 220px;
    display: flex;
}
.elfitem-yyield-input {
    width: 220%;
}

.dialog-footer {
    padding-bottom: 70px;
}
.dialog-footer-btn {
    margin-right: 44%;
}
.avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar {
    width: 240px;
    height: 240px;
    display: block;
    border: 1px solid #cccccc;
}
.elcard {
    margin-top: 20px;
}
.elcards {
    margin-top: 20px;
}
.elrow {
    display: flex;
}
.elcol-header {
    color: #409eff;
    margin-bottom: 20px;
    font-size: 16px;
}
::-webkit-scrollbar {
    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    );
}
</style>
