<template>
  <div>
    <h1>Login</h1>
    <el-row :gutter="5">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >User:
      </span>
      <el-col :span="8" :offset="2">
        <el-input v-model="userName" placeholder="input userName" />
      </el-col>
    </el-row>
    <el-row>
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Password:
      </span>
      <el-col :span="8" :offset="1">
        <el-input v-model="password" placeholder="input password" />
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="login">Login</el-button>
    </el-row>
    <el-row>
      <el-button type="primary" @click="createAccount">
        Create Account
      </el-button>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import api from "../common/api";

export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      let me = this;
      axios
        .post(api.users.login, {
          userName: me.userName,
          password: me.password,
        })
        .then(function (response) {
          console.log(response);
          if (response.data.Code == 200) {
            alert(response.data.Msg);
            localStorage.token = response.data.Data.token;
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response.data.Data.token}`;
            me.$router.push("/Home");
          } else {
            alert(response.data.Msg);
          }
        })
        .catch(function (err) {
          alert(err);
        });
    },
    createAccount() {
      this.$router.push("/CreateAccount");
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
</style>