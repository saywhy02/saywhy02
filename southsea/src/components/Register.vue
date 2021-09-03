<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8" :offset="8">
                <h1 class="title">信息员注册</h1>
            </el-col>
            <el-col :span="8" :offset="8">
                <el-card :body-style="{ padding: '20px' }" shadow="never">
                    <div class="back">
                        <el-button type="text" @click="back" target="_blank"
                            ><i
                                class="el-icon-back"
                                style="padding-right:6px;width: 18px;height: 18px;"
                            ></i
                            >返回</el-button
                        >
                        <h3>用户注册</h3>
                    </div>

                    <el-form
                        :rules="rules"
                        ref="form"
                        :model="form"
                        label-width="80px"
                        class="demo-ruleForm"
                    >
                        <el-form-item label="真实姓名" prop="name">
                            <el-input
                                v-model="form.name"
                                maxlength="30"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号码" prop="number">
                            <el-input
                                v-model="form.number"
                                maxlength="18"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="初始密码" prop="pass">
                            <el-input v-model="form.pass"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="passtwo">
                            <el-input v-model="form.passtwo"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码" prop="phone">
                            <el-input
                                v-model="form.phone"
                                maxlength="11"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" class="yan" prop="yannum">
                            <el-input v-model="form.yannum"></el-input>
                            <el-button
                                :disabled="isDisabled"
                                class="yanz"
                                type="primary"
                                >获取验证码</el-button
                            >
                        </el-form-item>
                        <el-form-item label="选择镇街" class="left">
                            <el-select v-model="form.town" placeholder="请选择">
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
                        <el-form-item label="选择村居" class="left">
                            <el-select
                                v-model="form.village"
                                placeholder="请选择"
                            >
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
                        <el-form-item
                            label="申请理由"
                            class="liyou"
                            prop="desc"
                        >
                            <el-input
                                type="textarea"
                                v-model="form.desc"
                                maxlength="500"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit"
                                >立即创建</el-button
                            >
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Register',

    data() {
        return {
            form: {
                name: '',
                number: '',
                pass: '',
                passtwo: '',
                phone: '',
                yannum: '',
                town: '',
                village: '',
                desc: '',
                delivery: false,
            },
            isDisabled: false,
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入您的真实姓名',
                        trigger: 'blur',
                    },
                    {
                        min: 0,
                        max: 30,
                        message: '长度在 0 到 30 个字符',
                        trigger: 'blur',
                    },
                ],
                number: [
                    {
                        required: true,
                        message: '请输入身份证号',
                        trigger: 'blur',
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur',
                    },
                ],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                passtwo: [
                    {
                        required: true,
                        message: '两次输入密码不一致',
                        trigger: 'blur',
                    },
                ],
                phone: [
                    {
                        required: true,
                        message: '请输入手机号码',
                        trigger: 'blur',
                    },
                    {
                        min: 11,
                        max: 11,
                        message: '请输入11位手机号码',
                        trigger: 'blur',
                    },
                ],
                yannum: [
                    {
                        required: true,
                        message: '手机验证码不能为空',
                        trigger: 'blur',
                    },
                ],
                desc: [
                    {
                        required: true,
                        message: '请填写申请说明',
                        trigger: 'blur',
                    },
                ],
            },
        };
    },

    mounted() {},

    methods: {
        onSubmit() {
            console.log('submit!');
        },
        back() {
            this.$router.push({
                path: '/Login',
            });
        },
    },
};
</script>

<style>
.title {
    margin-top: 60px;
    margin-bottom: 30px;
    font-weight: 400;
}
h3 {
    display: inline-block;
    font-weight: 500;
    margin-left: 10px;
    font-size: 18px;
    color: #000;
}
.back {
    border-bottom: 1px solid #cecece;
    margin-bottom: 20px;
    padding-bottom: 15px;
    line-height: 24px;
}
.back .el-button {
    color: #333;
    padding: 0 !important;
    padding-right: 12px !important;
    border-right: 1px solid #cecece;
}
.yanz {
    width: 100px;
    padding: 12px 0;
    margin-left: 10px;
}
.el-form-item__label {
    width: 100px !important;
}
.el-input {
    width: 90%;
}
.yan .el-input {
    width: 60%;
}
.left {
    float: left;
    width: 50%;
}
.left .el-form-item__content {
    margin-left: 0 !important;
}
.left .el-select {
    width: 60%;
}
.liyou .el-form-item__content {
    width: 80%;
    float: left;
}
.liyou .el-form-item__content {
    margin-left: 0 !important;
}
</style>
