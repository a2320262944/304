<template lang="html">
<!-- set background color -->
  <div class="bgc">
    <br>
    <br>
    <br>    
<!-- set heading style and color -->
    <h5 class="head" style="color:yellow"> The DMC5 DataBase <br><br></h5>
    <el-row>
      <el-col :span="10" :offset="7">
        <el-tabs v-model="activeName" @tab-click="handleClick">
<!-- set login tab as first tab -->
          <el-tab-pane label="Login" name="first">
            <el-col >
<!-- set login input form -->
              <el-form :model="dynamicValidateForm" label-width="100px" ref="dynamicValidateForm">
                    <br>
                    <el-form-item
                      prop="email"
                      label="Email:"
                      :rules="rules.email"
                    >
                      <el-input v-model="dynamicValidateForm.email" placeholder="Enter email"></el-input>
                    </el-form-item>
                    <el-form-item
                    prop="password"
                    label="Password:"
                    :rules = "rules.password"
                    >
                      <el-input type="password" v-model="dynamicValidateForm.password" placeholder="Enter password"></el-input>
                    </el-form-item>
                    <br>
                    <el-button type="primary" class="btn btn-primary" @click="submitForm('dynamicValidateForm')">Login</el-button>
                    <el-button class="btn btn-success" @click="resetForm('dynamicValidateForm')">Back</el-button>
              </el-form>
            </el-col>
          </el-tab-pane>
<!-- set register as the second tag -->
          <el-tab-pane label="Register" name="second">
<!-- use content from register component -->
            <Register></Register>
          </el-tab-pane>
      </el-tabs>
    </el-col>
    </el-row>
    <br>
    <br>  
  </div>
</template>

<script>
import Register from '@/components/Register.vue'
import * as types from '../store/types'
import api from '../axios'
export default {
    name: 'login',
    data() {
        return {
            dynamicValidateForm: {
                email: '',
                password: ''
            },
            activeName: this.$store.state.activeName,
            rules: {
                email: [{
                        required: true,
                        message: 'Please input email address',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: 'Please input correct email address',
                        trigger: 'blur'
                    }
                ],
                password: {
                    required: true,
                    message: 'Please input password',
                    trigger: 'blur'
                }
            }
        }
    },
    components: {
        Register
    },
    methods: {
        handleClick(tab, event) {},
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let opt = this.dynamicValidateForm;
                    api.UserLogin(opt).then(({
                        data
                    }) => {
                        console.log(data)
                        if (!data.info) {
                            this.$message({
                                type: 'info',
                                message: 'Account does not exist'
                            })
                        }
                        if (data.success) {
                            this.$message({
                                type: 'success',
                                message: 'Login succeeded'
                            })
                            this.$store.dispatch('UserLogin', data.token)
                            this.$store.dispatch('UserName', data.email)
                            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                            this.$router.push({name: 'games'});
                        } else {
                            this.$message({
                                type: 'info',
                                message: 'Incorrect password'
                            })
                        }
                    })
                } else {
                    console.log('Error Submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss">

.bgc{
    background-color:green
}
</style>
