<template>
  <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
    <a-form-model-item has-feedback label="用户名" prop="name">
      <a-input v-model="ruleForm.name" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="原始密码" prop="originalPassword">
      <a-input
        v-model="ruleForm.originalPassword"
        type="originalPassword"
        autocomplete="off"
      />
    </a-form-model-item>
    <a-form-model-item has-feedback label="新密码" prop="newPassword">
      <a-input v-model="ruleForm.newPassword" type="password" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="确认密码" prop="checkPass">
      <a-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('ruleForm')"> 提交修改 </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('ruleForm')"> 取消 </a-button>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import { UserService } from "../api/User";
import { message } from "ant-design-vue";

export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请验证新的密码"));
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error("两次输入的不一致"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        newPassword: "",
        checkPass: "",
        originalPassword: "",
        name: "",
      },
      rules: {
        name: { required: true, message: "请输入用户名", trigger: "blur" },
        newPassword: [{ validator: validatePass, trigger: "change" }],
        checkPass: [{ validator: validatePass2, trigger: "change" }],
        originalPassword: { required: true, message: "请输入原始密码", trigger: "blur" },
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          UserService.updatePassWord({
            name: this.ruleForm.name,
            originalPassword: this.ruleForm.originalPassword,
            newPassword: this.ruleForm.newPassword,
          }).then((res) => {
            if (res.code == 200) {
              message.success("修改成功");
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
