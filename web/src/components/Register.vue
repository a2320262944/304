<template lang="html">
  <div class="">
    <el-form :model="registerValidateForm" label-width="100px"  ref="registerValidateForm">
        <br>
          <el-form-item
            prop="email"
            label="Email:"
            :rules="rules.email"
          >
            <el-input v-model="registerValidateForm.email" placeholder="Enter email"></el-input>
          </el-form-item>
          <el-form-item
          prop="password"
          label="Password:"
          :rules = "rules.password"
          >
            <el-input type="password" v-model="registerValidateForm.password" placeholder="Enter password"></el-input>
          </el-form-item>
          <el-form-item
          prop="checkPass"
          label="Enter again:"
          :rules = "rules.checkPass"
          >
            <el-input type="password" v-model="registerValidateForm.checkPass" placeholder="Enter password again"></el-input>
          </el-form-item>
          <br>
          <el-button type="primary" class="btn btn-primary" @click="submitForm('registerValidateForm')">Register</el-button>
          <el-button  class="btn btn-success" @click="resetForm('registerValidateForm')">Back</el-button>
    </el-form>
  </div>
</template>
·
<script>
import * as types from '../store/types'
import api from '../axios'
export default {
    name: 'login',
    data() {
        let validatePass1 = (rule, value, callback) => {
            let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;
            if (!reg.test(value)) {
                callback(new Error('password need to have 6-16 digits, and include letter or character'))
            } else {
                callback()
            }
        };
        let validatePass2 = (rule, value, callback) => {
            value === '' ? callback(new Error('Please input password again')) :
                value !== this.registerValidateForm.password ? callback(new Error('Inconsistent password input!')) :
                callback()
        };
        return {
            registerValidateForm: {
                email: '',
                password: '',
                checkPass: '',
                first: 'first'
            },
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
                password: [{
                        required: true,
                        message: 'Please input password',
                        trigger: 'blur'
                    },
                    {
                        validator: validatePass1,
                        trigger: 'blur'
                    }
                ],
                checkPass: [{
                        required: true,
                        message: 'Please input password again',
                        trigger: 'blur'
                    },
                    {
                        validator: validatePass2,
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    methods: {
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let opt = this.registerValidateForm;
                    api.userRegister(opt).then(({
                        data
                    }) => {
                        if (data.success) {
                            this.$message({
                                type: 'success',
                                message: `Register succeeded, please login.`
                            })
                            this.$router.go(0)
                            this.$router.push('/')
                        } else {
                            this.$message({
                                type: 'info',
                                message: 'Account already existed'
                            })
                        }
                    }).catch((err) => {
                        console.log(err);
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

<style lang="css">
</style>
