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
                        <el-button type="primary" @click="onSubmit(1)"
                            >登录</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <!-- 手机号登录 -->
            <el-tab-pane label="手机号登录" name="second">
                <el-form
                    ref="form"
                    :model="form"
                    label-width="80px"
                    :rules="rules"
                >
                    <el-form
                        :model="ruleForm2"
                        status-icon
                        :rules="rules2"
                        ref="ruleForm2"
                        label-width="0"
                        class="demo-ruleForm"
                    >
                        <!-- 手机输入框 -->
                        <el-form-item prop="tel">
                            <el-input
                                v-model="ruleForm2.tel"
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
                            ></el-input>
                            <!-- 发送验证码按钮 -->
                            <el-button
                                type="success"
                                :disabled="isDisabled"
                                @click="open"
                                class="yanzheng"
                                >{{ buttonText }}</el-button
                            >
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit(2)"
                                >手机登录</el-button
                            >
                        </el-form-item>
                    </el-form>
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
            <el-form :model="form2" ref="form">
                <el-form-item :label-width="formLabelWidth">
                    <span class="redbox"
                        ><span class="red">*</span>手机号码</span
                    ><el-input
                        v-model="form2.menu"
                        autocomplete="off"
                        maxlength="11"
                        show-word-limit
                    ></el-input>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth">
                    <span class="redbox"><span class="red">*</span>验证码</span
                    ><el-input
                        v-model="form2.yanzheng"
                        autocomplete="off"
                        class="yinput"
                    ></el-input>
                    <el-button
                        :disabled="isDisabled"
                        @click="open"
                        class="yanzheng"
                        >获取验证码</el-button
                    >
                </el-form-item>
                <el-form-item :label-width="formLabelWidth">
                    <span class="redbox"><span class="red">*</span>密码</span
                    ><el-input
                        v-model="form2.pass"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item :label-width="formLabelWidth">
                    <span class="redbox"
                        ><span class="red">*</span>确认密码</span
                    ><el-input
                        v-model="form2.passtwo"
                        autocomplete="off"
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
        //检验验证码是否为空
        let checkSmscode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else {
                callback();
            }
        };
        return {
            url: '../../static/img/code.png',
            dialogFormVisible: false,
            form2: {
                id: '',
                menu: '',
                yanzheng: '',
                pass: '',
                passtwo: '',
            },
            forget: false,
            formLabelWidth: '120px',
            ruleForm2: {
                tel: '',
                smscode: '',
            },
            form: {
                username: '',
                password: '',
                phone: '',
                code: '',
            },
            activeName: 'first',
            rules: {
                username: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur',
                    },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ],
            },
            rules2: {
                tel: [{ validator: checkTel, trigger: 'change' }],
                smscode: [{ validator: checkSmscode, trigger: 'change' }],
            },
            buttonText: '发送验证码',
            isDisabled: false, // 是否禁止点击发送验证码按钮
            flag: true,
            yannum: 0,
            aresure: false,
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submit() {
            this.$refs.ruleForm.validate((e) => {
                if (!e) return;
                // 提交表单
                this.$router.push({ name: 'index' });
                console.log(this.form);
            });
        },
        //登录
        onSubmit(val) {
            if (val == 1) {
                this.$router.push({
                    path: '/Map',
                });
            } else {
                console.log(222);
            }
        },
        //获取六位随机验证码
        open() {
            var code = [];
            for (var i = 0; i < 6; i++) {
                code.push(Math.floor(Math.random() * 10));
            }
            code = code.join('');
            this.yannum = code;
            this.$message(code);
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
            this.forget = false;
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
.topbox .yanzheng {
    width: 30%;
    float: right;
}
.forget .el-input {
    width: 80%;
}
.red {
    color: red;
}
.redbox {
    width: 90px !important;
    display: inline-block;
    text-align: right;
    padding-right: 30px;
}
.forget .el-form-item__content {
    margin-left: 20px !important;
}
.forget .yanzheng {
    width: 15%;
    float: none;
    margin-left: 20px;
}
.forget .yinput {
    width: 50%;
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
