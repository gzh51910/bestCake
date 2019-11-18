<template>
    <div class="main-login">
        <div class="login-title">
            <div class="login-btn">
                <label class="back">
                    <router-link to="/" tag="li">
                        <i class="el-icon-arrow-left"></i>
                    </router-link>
                </label>
            </div>
        </div>
        <div class="login-top">
            快速登录
        </div>
        <div class="login-form">
            <el-form :model="ruleForm" :rules="rules" status-icon ref="regForm" label-width="80px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox label="七天免登录" v-model="ruleForm.mdl"></el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.native="submitForm">登录</el-button>
                    <router-link to="/reg">
                        <el-button icon="el-icon-edit-outline" style="margin-left: 5vw">免费注册</el-button>
                    </router-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            labelPosition: "left",
            ruleForm: {
                username: "",
                password: "",
                mdl: true
            },
            rules: {
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ],
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    }
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
                    let data = await this.getdata(
                        "http://120.24.166.74:3001/login",
                        {
                            params: {
                                username,
                                password
                            }
                        }
                    );
                    
                    localStorage.setItem("ShoppingCart",data.data.shopcar)

                    if (data.data.status === 1) {
                        let Authrization = data.data.token;
                        localStorage.setItem("Authrization", Authrization);

                        let { username } = this.ruleForm;
                        localStorage.setItem("username", username);
                        this.$store.commit("pushusername", username);
                        this.$router.replace({
                            path: "/mine",
                            params: { username },
                            query: { username }
                        });
                    } else {
                        alert(data.data.msg);
                    }
                } else {
                    return false;
                }
            });
        }
    }
};
</script>
<style lang="scss">
li {
    list-style: none;
}

a {
    text-decoration: none;
}

.router-link-active {
    text-decoration: none;
}

.el-checkbox__label {
    color: white;
}

.main-login {
    height: 100vh;
    background: rgba(54, 209, 220, 1);
    .login-title {
        height: 11.2vw;
        line-height: 11.2vw;
        color: #fff;
        font-size: 5.267vw;
        .login-btn {
            margin-left: 2vw;
        }
    }
    .login-top {
        color: #fff;
        font-size: 8.533vw;
        line-height: 12vw;
        margin-left: 5.333vw;
    }
    .login-form {
        margin: 60px 50px 0 25px;
        .el-form-item__label {
            color: #fff;
        }
    }
}
</style>