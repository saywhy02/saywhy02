<template>
    <div class="box">
        <h1 style=" font-size: 28px; padding-top: 120px; text-align: center;">
            南海城市大脑<small style=" text-align: center;"
                >渔业资源管理系统</small
            >
        </h1>
        <el-tabs
            class="topbox"
            v-model="activeName"
            style="margin: 0 auto; text-align: center"
        >
            <!-- 账号密码登录 -->
            <el-tab-pane label="账号密码登录" name="first">
                <el-form
                    ref="form"
                    :model="form"
                    label-width="80px"
                    :rules="rules"
                >
                    <el-form-item prop="username">
                        <el-input
                            v-model="form.username"
                            maxlength="11"
                            show-word-limit
                            prefix-icon="el-icon-user"
                            placeholder="请输入账号或手机号码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            v-model="form.password"
                            prefix-icon="el-icon-goods"
                            placeholder="请输入密码"
                            type="password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit"
                            >登录</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <!-- 手机号登录 -->
            <el-tab-pane label="手机号登录" name="second">
                <el-form
                    :model="ruleForm2"
                    status-icon
                    :rules="rules2"
                    ref="ruleForm2"
                    label-width="0"
                    class="demo-ruleForm"
                >
                    <!-- 手机输入框 -->
                    <el-form-item prop="username">
                        <el-input
                            v-model="ruleForm2.username"
                            auto-complete="off"
                            placeholder="请输入手机号"
                            maxlength="11"
                            show-word-limit
                            prefix-icon="el-icon-phone"
                        ></el-input>
                    </el-form-item>
                    <!-- 验证码输入框 -->
                    <el-form-item prop="smscode" class="code">
                        <el-input
                            v-model="ruleForm2.smscode"
                            placeholder="验证码"
                            class="yanZ"
                            prefix-icon="el-icon-goods"
                            :validate-event="false"
                        ></el-input>
                        <!-- 发送验证码按钮 -->
                        <el-button
                            type="success"
                            @click="open"
                            class="msgNum"
                            >{{ buttonText }}</el-button
                        >
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit"
                            >手机登录</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <!-- 忘记密码/注册页 -->
            <el-link type="primary" style="float: left" @click="forgetPass"
                >忘记密码</el-link
            >
            <el-link type="primary" style="float: right" @click="sub"
                >信息员注册</el-link
            >

            <el-col>
                <el-image :src="url" fit="cover"></el-image>
                <h5>手机端二维码</h5>
            </el-col>
            <el-col class="Copy">
                @copyright 2021 阿里云计算有限公司出品
            </el-col>
        </el-tabs>
        <!-- 忘记密码对话框 -->
        <el-dialog
            title="忘记密码"
            :visible.sync="forget"
            class="forget"
            :before-close="handleClose"
        >
            <el-form
                :model="form2"
                ref="form2"
                :rules="rules3"
                :label-width="formLabelWidth"
            >
                <el-form-item prop="mobile" label="手机号码">
                    <el-input
                        v-model="form2.mobile"
                        autocomplete="off"
                        maxlength="11"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="0">
                        <el-form-item prop="msgNum" label="验证码">
                            <el-input
                                v-model="form2.msgNum"
                                autocomplete="off"
                                class="yinput"
                                :validate-event="false"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-button @click="openDialog" class="msgNum"
                            >获取验证码
                        </el-button>
                    </el-col>
                </el-row>
                <el-form-item prop="password" label="密码">
                    <el-input
                        type="password"
                        v-model="form2.password"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="passTwo" label="确认密码">
                    <el-input
                        v-model="form2.passTwo"
                        autocomplete="off"
                        type="password"
                    ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="warning" @click="handleClose">关 闭</el-button>
                <el-button type="primary" @click="sure">修 改</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { login, VerificationCode, resetPasswd } from '@/api/reg';
export default {
    name: 'Login',
    data() {
        //检验手机号
        let checkTel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('手机号码不能为空'));
            } else if (!this.checkMobile(value)) {
                callback(new Error('请输入正确的手机号码'));
            } else {
                callback();
            }
        };
        //检验手机登录验证码
        let checkSmscode = (rule, value, callback) => {
            if (!this.flag) {
                callback(new Error('请先获取验证码'));
            } else if (value === '') {
                callback(new Error('请输入验证码'));
            } else if (value == this.yanNum) {
                callback();
            } else {
                callback(new Error('请输入正确的验证码'));
            }
        };
        //检验模态框验证码
        let checkDCode = (rule, value, cb) => {
            if (!this.flagDialog) {
                cb(new Error('请先获取验证码'));
            } else if (value === '') {
                console.log(2);
                cb(new Error('请输入验证码'));
            } else if (value == this.yanNumDialog) {
                console.log(3);
                cb();
            } else {
                console.log(4);
                cb(new Error('请输入正确的验证码'));
            }
        };
        //模态框密码确认
        let checkPass = (rule, value, cb) => {
            if (value == '') {
                cb(new Error('请确认密码'));
            } else if (value == this.form2.password) {
                cb();
            } else {
                cb(new Error('两次密码不相同'));
            }
        };
        return {
            // 二维码
            url: '../../static/img/code.png',
            // 对话框
            form2: {
                mobile: '',
                msgNum: '',
                password: '',
                passTwo: '',
                hash: '',
                tamp: '',
                type: 1,
            },
            forget: false,
            formLabelWidth: '120px',
            ruleForm2: {
                username: '',
                smscode: '',
                grant_type: 'sms_code',
                scope: 'all',
                hash: '',
                tamp: '',
            },
            form: {
                username: '',
                password: '',
                grant_type: 'password',
                scope: 'all',
            },
            activeName: 'first',
            // 账号登录表单验证
            rules: {
                username: [
                    {
                        required: true,
                        message: '登陆帐号不能为空',
                        trigger: 'blur',
                    },
                ],
                password: [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur',
                    },
                ],
            },
            rules2: {
                username: [{ validator: checkTel, trigger: 'blur' }],
                smscode: [{ validator: checkSmscode, trigger: 'blur' }],
            },
            rules3: {
                mobile: [
                    { required: true, validator: checkTel, trigger: 'blur' },
                ],
                msgNum: [
                    { required: true, validator: checkDCode, trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
                passTwo: [
                    { required: true, validator: checkPass, trigger: 'blur' },
                ],
            },
            buttonText: '发送验证码',
            flag: false, //标记手机登录是否请求了验证码
            flagDialog: false, //标记忘记密码弹窗是否请求了验证码
            yanNum: 0, //标记手机登录验证码
            yanNumDialog: 0, //标记忘记密码弹窗验证码
        };
    },
    created() {
        localStorage.setItem('userInfo', null);
    },
    methods: {
        // 账号密码登录
        submit() {
            this.$refs.form.validate((e) => {
                if (!e) return;
                else {
                    this.login();
                }
            });
        },
        async login() {
            try {
                const { data } = await login(this.form);
                console.log(data);
                localStorage.setItem('userInfo', JSON.stringify(data));
                this.$router.push({
                    path: '/',
                });
                this.$message({
                    message: '登录成功',
                    type: 'success',
                });
            } catch (error) {
                this.$message.error('登录异常');
            }
        },
        // 手机登录
        onSubmit() {
            // console.log(this.$refs.ruleForm2.validate);
            this.$refs.ruleForm2.validate((e) => {
                if (!e) return;
                else {
                    this.SMS();
                }
                // 提交表单
            });
        },
        async SMS() {
            try {
                const { data } = await login(this.ruleForm2);
                console.log(data);
                localStorage.setItem('userInfo', JSON.stringify(data));
                this.$router.push({
                    path: '/',
                });
                this.$message({
                    message: '登录成功',
                    type: 'success',
                });
            } catch (error) {
                this.$message.error('登录异常');
            }
        },
        //获取六位随机验证码
        async open() {
            if (this.ruleForm2.username == '') {
                this.$message.error('请输入正确的手机号码');
            } else {
                this.flag = true;
                let formData = {
                    sendType: '1',
                    mobile: this.ruleForm2.username,
                };
                const { data } = await VerificationCode(formData);
                // console.log(data);
                if (data.code == 500) {
                    this.$message.warning(data.msg);
                } else {
                    this.ruleForm2.hash = data.hash;
                    this.ruleForm2.tamp = data.tamp;
                    this.yanNum = data.validateNum;
                    this.$message(this.yanNum);
                }
            }
        },
        async openDialog() {
            if (this.form2.mobile == '') {
                this.$message('手机号格式不正确，请输入正确！');
            } else {
                this.flagDialog = true;
                let formData = {
                    sendType: '2',
                    mobile: this.form2.mobile,
                };
                const { data } = await VerificationCode(formData);
                this.flagDialog = true;
                this.form2.hash = data.hash;
                this.form2.tamp = data.tamp;
                this.yanNumDialog = data.validateNum;
                this.$message(this.yanNumDialog);
            }
        },
        // 验证手机号
        checkMobile(str) {
            let re = /^1\d{10}$/;
            if (re.test(str)) {
                return true;
            } else {
                return false;
            }
        },
        //忘记密码
        forgetPass() {
            this.forget = true;
        },
        //取消
        handleClose() {
            this.$confirm('是否关闭?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    this.forget = false;
                })
                .catch(() => {});
        },
        //确定
        sure() {
            this.$refs.form2.validate((e) => {
                if (!e) return;
                else {
                    this.change();
                }
            });
        },
        async change() {
            const { data } = await resetPasswd(this.form2);
            console.log(data);
            if (data.code == 0) {
                this.$message.success('修改密码成功');
                this.forget = false;
            } else {
                this.$message.error(data.msg);
            }
        },
        //注册
        sub() {
            this.$router.push({
                path: '/Register',
            });
        },
    },
};
</script>

<style>
h1,
small,
h5 {
    font-weight: 400;
}
h1 {
    margin-bottom: 30px;
    box-sizing: border-box;
}
small {
    margin-top: 10px;
    display: block;
}
.box {
    width: 100%;
    height: 100vh;
    background: url(../../static/img/bg.png) no-repeat center;
    background-size: cover;
}
.topbox {
    width: 350px !important;
}
.topbox .el-tabs__nav {
    float: none;
}
.topbox .el-tabs__active-bar {
    width: 50% !important;
}
.topbox .el-tabs {
    width: 350px !important;
}
.topbox .el-tabs__item {
    padding: 0 50px;
}
.topbox .el-form-item__content {
    margin-left: 0 !important;
}
.topbox .el-form-item {
    margin: 22px 0;
}
.topbox .el-button {
    width: 100%;
}
.topbox .yanZ {
    width: 67%;
    float: left;
}
.topbox .msgNum {
    width: 30%;
    float: right;
}
.forget .el-input {
    width: 80%;
}
.red {
    color: red;
}
.forget .el-form-item__content {
    margin-left: 120px !important;
}
.forget .msgNum {
    float: none;
    margin-left: 20px;
}
.forget .yinput {
    width: 100%;
}
.el-image {
    width: 100px;
    height: 100px;
    margin: 100px auto 0;
    display: block;
}
.Copy {
    margin-top: 20%;
    height: 30px;
    text-align: center;
    font-size: 14px;
}
</style>
