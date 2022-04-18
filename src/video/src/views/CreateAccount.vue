<template>
  <div class="demo-input-suffix">
    <h1>Create Account</h1>
    <el-row :gutter="5">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >User:
      </span>
      <el-col :span="8">
        <el-input v-model="userName" placeholder="input userName" />
      </el-col>
    </el-row>
    <el-row>
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center"
        >Password:
      </span>
      <el-col :span="8">
        <el-input v-model="password" placeholder="input password" />
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click="back">Back</el-button>
      <el-button type="primary" @click="confirm">Confirm</el-button>
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
    async confirm() {
      let me = this;
      axios
        .post(api.users.add, {
          userName: me.userName,
          password: me.password,
        })
        .then(function (response) {
          console.log(response);
          if (response.data.Code == 200) {
            alert(response.data.Msg);
            me.$router.push("/Login");
          } else {
            alert(response.data.Msg);
          }
        })
        .catch(function (err) {
          alert(err);
        });
    },
    back() {
      this.$router.push("/Login");
    },
  },
};
</script>