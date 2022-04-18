<template>
  <div class="common-layout">
    <el-row justify="center">
      <h1>Home</h1>
    </el-row>

    <el-row justify="center">
      <el-upload
        class="avatar-uploader"
        :auto-upload="false"
        action=""
        :show-file-list="false"
        :on-change="uploadImg"
      >
        <el-image
          v-if="imgDataUrl"
          :src="imgDataUrl"
          style="width: 200px; height: 300px"
          fit="scale-down"
        />
        <el-icon v-else class="avatar-uploader-icon"></el-icon>
      </el-upload>
    </el-row>

    <el-row :gutter="12" justify="center">
      <el-col :span="12">
        <el-input
          v-model="textarea"
          :rows="5"
          type="textarea"
          placeholder="Please input"
        />
      </el-col>
    </el-row>

    <el-row justify="center">
      <el-col :span="12">
        <el-button type="primary" @click="post"> 發文 </el-button>
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
      textarea: "",
      img: "",
      imgDataUrl: "",
    };
  },
  methods: {
    test() {
      axios.get(api.main.test).then(function (response) {
        console.log(response.data);
      });
    },

    post() {
      var formData = new FormData();
      formData.append("image", this.img);
      formData.append("post", this.textarea);
      axios
        .post(api.main.post, formData, {
          onUploadProgress: function (progressEvent) {
            console.log(progressEvent);
            console.log(progressEvent.loaded / progressEvent.total);
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function (response) {
          console.log(response.data.Code);
        })
        .catch((err) => {
          alert(err);
        });
    },

    uploadImg(file) {
      this.img = file.raw;
      let me = this;
      var reader = new FileReader();
      reader.onload = function (e) {
        me.imgDataUrl = e.target.result;
      };
      reader.readAsDataURL(file.raw);
    },

    onProgress(e) {
      console.log(e);
    },
  },
};
</script>
