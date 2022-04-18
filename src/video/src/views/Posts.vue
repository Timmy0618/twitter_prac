<template>
  <div>
    <el-row justify="center">
      <h1>Posts</h1>
    </el-row>

    <el-container v-for="post in posts" :key="post._id">
      <el-aside>
        <el-avatar
          v-if="post.user_avatar != ''"
          shape="circle"
          :size="100"
          fit="cover"
          :src="imgUrl + post.user_avatar"
        />
        <el-icon
          v-else
          class="avatar-uploader-icon"
          style="width: 200px; height: 300px"
        ></el-icon>
        <span> {{ post.user_id }} </span>
      </el-aside>
      <el-main>
        <el-row>
          <el-image
            :src="imgUrl + post.img"
            style="width: 200px; height: 300px"
            lazy
          />
        </el-row>
        <el-row>
          <span> {{ post.post }} </span>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import api from "../common/api";

export default {
  data() {
    return {
      imgUrl: api.main.getImg,
      posts: [
        {
          _id: "",
          user_id: "",
          post: "",
          img: "",
          user_avatar: "",
          create_time: "",
        },
      ],
    };
  },
  methods: {
    getPosts() {
      let me = this;
      axios.get(api.main.getPost).then(function (response) {
        if (response.data.Code == 200) {
          console.log(response.data.Data);
          me.posts = response.data.Data;
        }
      });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>