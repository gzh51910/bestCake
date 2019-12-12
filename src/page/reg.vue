<template>
    <div class="main-login">
        <div class="reg-title">
            <div class="reg-btn">
                <label class="back">
                <router-link to="/log" tag="li">
                    <i class="el-icon-arrow-left"></i>
                    </router-link>
                </label>
                
            </div>
        </div>


        <TodoList />
        <div class="reg-top">
            免费注册
        </div>
        <div class="reg-form">
            <el-form :model="ruleForm" status-icon ref="regForm" :rules="rules" label-width="100px" :label-position="labelPosition">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
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
import Vue from 'vue'
import { Form, FormItem,Input,Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/form.css'
import 'element-ui/lib/theme-chalk/form-item.css'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/button.css'
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
export default {
    data() {
        const validatePass = (rule, value, callback) => {
            if (value !== this.ruleForm.password) {
                callback(new Error("两次输入密码不对!"));
            } else {
                callback();
            }
        };

        const checkUsername = (rule, value, callback) => {
            if (!/^[a-z]/i.test(value)) {
                callback(new Error("用户名必须以字母开头！"));
            } else if (!/^[a-z][\w-]+$/i.test(value)) {
                callback(new Error("用户名必须为数字字母下划线横杠组成"));
            } else {
                callback();
            }
        };
        return {
            labelPosition: "left",
            ruleForm: {
                username: "",
                passworde: "",
                checkPass: ""
            },
            rules: {
                password: [
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
            this.$refs.regForm.validate(async valid => {
                if (valid) {
                    let { username, password } = this.ruleForm;
                    let data = await this.postdata(
                        "http://118.31.77.168:3001/register",
                        {
                            username,
                            password
                        }
                    );
                    if (data.data.status === 1) {
                        alert("恭喜！注册成功！");
                        this.$router.replace("/log");
                    }
                    if (data.data.status === 0) {
                        alert("用户名已存在！");
                    }
                } else {
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs.regForm.resetFields();
        }
    },
    async mounted() {
        
    },
};
</script>
<style lang="scss" scoped>
.main-login {
    height: 100vh;
    background: rgba(54, 209, 220, 1);
    .reg-title {
        height: 11.2vw;
        line-height: 11.2vw;
        color: #fff;
        font-size: 5.267vw;
        margin-left: 2vw;
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