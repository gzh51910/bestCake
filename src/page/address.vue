<template>
    <div>
        <div class="address-title">
            <router-link to="/mine">
                <div class="back"></div>
            </router-link>
        </div>
        <div>
            <div class="wrap">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="收货人" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="phone">
                        <el-input v-model="ruleForm.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="地址" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
        ruleForm: {
          name: '',
          phone:'',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          phone:[
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写地址', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let { desc,name,phone } = this.ruleForm
            this.postdata("http://118.31.77.168:3001/addplace",{username:this.$store.state.username,desc,name,phone})
            this.$store.commit("pushplace",{name,phone,place:desc})
            this.$router.push("/inf")
          } else {
           
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>
<style lang="scss" scoped>
.address-title {
    height: 9vw;
    background: #f7f7f7;
    .back {
        width: 3vw;
        height: 5vw;
        background-image: url(https://res.bestcake.com/act/exchange/jiantou.png);
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        left: 4vw;
        top: 2vw;
        background-size: 100% 100%;
    }
}
.el-form-item__label{
    width: 60vw !important;
}
.wrap{
    padding: 40px;
    padding-left: 0;
}
</style>