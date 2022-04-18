<template >
  <div>
    <el-row justify="center">
      <h1>Profile</h1>
    </el-row>
    <el-row justify="center">
      <el-upload
        class="avatar-uploader"
        :action="uploadUrl"
        :headers="headers"
        name="image"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <el-avatar
          v-if="profile.avatar != ''"
          style="width: 200px; height: 300px"
          :src="imgUrl + profile.avatar"
          fit="fill"
        />
        <el-icon
          v-else
          class="avatar-uploader-icon"
          style="width: 200px; height: 300px"
        ></el-icon>
      </el-upload>
    </el-row>

    <el-row :gutter="12" justify="center">
      <el-col :offset="4" :span="5">
        <span>UserName </span>
      </el-col>
      <el-col :span="6">
        <span> {{ profile.user_id }}</span>
      </el-col>
    </el-row>

    <el-row :gutter="12" justify="center">
      <el-col :offset="4" :span="5">
        <span>Email </span>
      </el-col>
      <el-col :span="6">
        <span>123</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import api from "../common/api";

export default {
  data() {
    return {
      imgUrl: api.main.getImg,
      uploadUrl: api.main.avatar,
      headers: axios.defaults.headers.common,
      profile: {
        avatar: "",
      },
      img: "",
      image: "",
    };
  },
  methods: {
    getProfile() {
      let me = this;
      axios.get(api.main.profile).then(function (response) {
        if (response.data.Code == 200) {
          me.profile = response.data.Data;
        } else {
          alert(response.data.Msg);
        }
      });
    },

    beforeAvatarUpload() {
      console.log("before");
      return true;
    },

    handleAvatarSuccess() {
      console.log("handle");
    },

    test(event) {
      console.log(event);
    },
  },
  mounted() {
    this.getProfile();
  },
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>