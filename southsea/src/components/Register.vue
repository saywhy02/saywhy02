<template>
    <div>
        <el-row>
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
                        ref="forms"
                        :model="form"
                        label-width="100px"
                        class="demo-ruleForm"
                    >
                        <el-form-item label="真实姓名" prop="realName">
                            <el-input
                                v-model="form.realName"
                                maxlength="30"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号码" prop="registerCard">
                            <el-input
                                v-model="form.registerCard"
                                maxlength="18"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item
                            type="password"
                            label="初始密码"
                            prop="password"
                        >
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="passRes">
                            <el-input
                                type="password"
                                v-model="form.passRes"
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码" prop="mobile">
                            <el-input
                                v-model="form.mobile"
                                maxlength="11"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" class="yan" prop="msgNum">
                            <el-input v-model="form.msgNum"></el-input>
                            <el-button
                                :disabled="isDisabled"
                                class="yanz"
                                type="primary"
                                @click="getMsg"
                                >获取验证码</el-button
                            >
                        </el-form-item>
                        <el-row>
                            <el-col :span="11" :offset="1">
                                <el-form-item label="选择镇街">
                                    <el-select
                                        v-model="form.town"
                                        clearable
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
                                    </el-select> </el-form-item
                            ></el-col>
                            <el-col :span="11" :offset="1">
                                <el-form-item label="选择村居">
                                    <el-select
                                        v-model="form.village"
                                        clearable
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
                            </el-col>
                        </el-row>
                        <el-form-item label="申请理由" prop="registerMemo">
                            <el-input
                                type="textarea"
                                v-model="form.registerMemo"
                                maxlength="500"
                                show-word-limit
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit"
                                >立即创建</el-button
                            >
                            <el-button @click="reset">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { register, VerificationCode } from '@/api/reg';
export default {
    name: 'Register',

    data() {
        // 手机号码判断
        let valid = (rule, value, callback) => {
            let reg = /^1[3,5,7,8]\d{9}$/;
            if (value === '') {
                callback(new Error('手机号不能为空，请输入正确！'));
            } else if (!reg.test(value)) {
                callback(new Error('请输入正确的手机号'));
            } else {
                callback();
            }
        };
        // 两次密码输入判断
        let passAll = (rule, value, callback) => {
            let pass = this.form.password;
            // console.log(pass);
            if (value != pass) {
                callback(new Error('两次密码输入不一致！'));
            } else {
                callback();
            }
        };
        return {
            form: {
                realName: '',
                registerCard: '',
                password: '',
                passRes: '',
                mobile: '',
                msgNum: '',
                town: '',
                village: '',
                registerMemo: '说明',
                tamp: '',
                userAdministrativeCode: 440605125,
                type: 0,
            },

            isDisabled: false,
            rules: {
                realName: [
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
                registerCard: [
                    {
                        required: true,
                        message: '请输入身份证号',
                        trigger: 'blur',
                    },
                    {
                        min: 18,
                        max: 18,
                        message: '请如实填写18位身份证号码',
                        trigger: 'blur',
                    },
                ],
                password: [{ required: true, trigger: 'blur' }],
                passRes: [
                    {
                        required: true,
                        validator: passAll,
                        trigger: 'blur',
                    },
                ],
                mobile: [
                    {
                        required: true,
                        validator: valid,
                        trigger: 'blur',
                    },
                    {
                        min: 11,
                        max: 11,
                        message: '请输入11位手机号码',
                        trigger: 'blur',
                    },
                ],
                msgNum: [
                    {
                        required: true,
                        message: '手机验证码不能为空',
                        trigger: 'blur',
                    },
                ],
                registerMemo: [
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
            this.$refs.forms.validate((valid) => {
                if (valid) {
                    this.onLogin();
                } else {
                    this.$message.error('请填写正确的手机号及注册信息！');
                    return false;
                }
            });
        },
        back() {
            this.$router.push({
                path: '/Login',
            });
        },
        getMsg() {
            this.onCode();
        },
        reset() {
            this.$refs.form.resetFields();
        },
        async onLogin() {
            const { data } = await register(this.form);
            console.log(data.msg);
            if (data.msg == '身份证号校验错误,') {
                this.$message('身份证号校验错误，请输入正确！');
            }
            if (data.msg == '注册用户成功') {
                this.$message(
                    '您好，您的注册申请已经进入注册审核状态，我们将在审核后第一时间通知您。请您留意短信消息。',
                );
            }
        },
        async onCode() {
            if (this.form.mobile == '') {
                this.$message('手机号格式不正确，请输入正确！');
            } else {
                let formdata = {
                    sendType: '3',
                    mobile: this.form.mobile,
                };
                const { data } = await VerificationCode(formdata);
                this.form.hash = data.hash;
                this.form.tamp = data.tamp;
                this.form.msgNum = data.validateNum;
                this.$message(this.form.msgNum);
            }
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
.el-input {
    width: 100%;
}
.yan .el-input {
    width: 60%;
}
.left .el-form-item__content {
    margin-left: 0 !important;
}
.left .el-select {
    width: 60%;
}
</style>
