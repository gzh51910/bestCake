<template>
    <div class="main-login">
        <div class="reg-title">
            <div class="reg-btn">
                <label class="back">
                    <i class="el-icon-arrow-left"></i>
                </label>
            </div>
        </div>
        <div class="reg-top">
            免费注册
        </div>
        <div class="reg-form">
            <el-form :model="ruleForm" status-icon ref="regForm" :rules="rules" label-width="100px" :label-position="labelPosition">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">注册</el-button>
                    <el-button icon="el-icon-edit" style="margin-left: 5vw" @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        const validatePass = (rule, value, callback) => {
            if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };

        const checkUsername = (rule, value, callback) => {
            if (!/^[a-z]/i.test(value)) {
                callback(
                    new Error("用户名必须以字母开头！")
                );
            } else if(!/^[a-z][\w-]+$/i.test(value)) {
                callback(new Error('用户名必须为数字字母下划线横杠组成'));
            }
        };
        return {
            labelPosition: "left",
            ruleForm: {
                username: "",
                pass: "",
                checkPass: ""
            },
            rules: {
                pass: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        min: 6,
                        max: 12,
                        message: "密码长度应在 6 到 12 个字符之间",
                        trigger: "blur"
                    }
                ],
                checkPass: [
                    { validator: validatePass, trigger: "blur" },
                    { required: true, message: "请确认密码", trigger: "blur" }
                ],
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    },
                    {
                        min: 3,
                        max: 12,
                        message: "长度应在 3 到 12 个字符之间",
                        trigger: "blur"
                    },
                    { validator: checkUsername, trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        submitForm() {
            //验证整个表单
            this.$refs.regForm.validate(valid => {
                if (valid) {
                    alert("恭喜您注册成功!");
                    this.$router.replace("/mine");
                } else {
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs.regForm.resetFields();
        }
    }
};
</script>
<style lang="scss">
.main-login {
    height: 100vh;
    background: rgba(54, 209, 220, 1);
    .reg-title {
        height: 11.2vw;
        line-height: 11.2vw;
        color: #fff;
        font-size: 5.267vw;
        .btn {
            margin-left: 2vw;
        }
    }
    .reg-top {
        color: #fff;
        font-size: 8.533vw;
        line-height: 12vw;
        margin-left: 5.333vw;
    }
    .reg-form {
        margin: 20px 50px 0 25px;

        .el-form-item__label {
            color: #fff;
        }
    }
}
</style>