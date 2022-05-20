<template>
  <div>
    <el-row justify="center">
      <h1>Posts</h1>
    </el-row>

    <el-container v-for="(post, index) in posts" :key="post._id">
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
        <el-row :gutter="10">
          <el-col :span="4">
            <span> {{ post.post }} </span>
          </el-col>

          <el-col :span="4">
            <el-button
              v-if="checkLike(post.likes)"
              type="primary"
              @click="disLike(post._id, index)"
            >
              like
            </el-button>
            <el-button
              v-else
              type="primary"
              plain
              @click="like(post._id, index)"
            >
              like
            </el-button>
          </el-col>

          <el-col :span="4">
            <el-button type="text" @click="open">
              {{ likeNums(post.likes) }}
            </el-button>
          </el-col>
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
          me.posts = response.data.Data;
        }
      });
    },

    checkLike(likes) {
      if (likes) {
        let userId = localStorage.userId;
        return likes.includes(userId);
      } else {
        return false;
      }
    },

    like(postId, index) {
      let me = this;

      axios.post(api.post.likePost + postId).then(function (response) {
        if (response.data.Code == 200) {
          console.log(response.data);
          me.posts[index].likes = response.data.Data.likes;
        }
      });
    },

    disLike(postId, index) {
      let me = this;

      axios.delete(api.post.likePost + postId).then(function (response) {
        if (response.data.Code == 200) {
          console.log(response.data);
          me.posts[index].likes = response.data.Data.likes;
        }
      });
    },

    open() {
      this.$alert("This is a message", "Title", {
        confirmButtonText: "OK",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },

    likeNums(likes) {
      if (likes) return likes.length;
      return 0;
    },
  },

  computed: {},

  mounted() {
    this.getPosts();
  },
};
</script>