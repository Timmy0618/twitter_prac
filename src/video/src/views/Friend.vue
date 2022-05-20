<template>
  <div>
    <el-row justify="center">
      <h1>Friend</h1>
    </el-row>
    <h1>RecommendFriend</h1>
    <el-row>
      <el-col>
        <div
          v-for="(friend, key) in recFriendList"
          :key="key"
          class="text item"
        >
          <el-row>
            <el-card class="box-card">
              <el-col>
                <el-avatar
                  v-if="friend.avatar"
                  shape="circle"
                  :size="100"
                  fit="cover"
                  :src="imgUrl + friend.avatar"
                />
                <el-icon
                  v-else
                  class="avatar-uploader-icon"
                  style="width: 100px; height: 100px"
                ></el-icon>
              </el-col>
              <el-col>
                <span> {{ friend.user_id }} </span>
              </el-col>
              <el-col>
                <el-button type="primary" plain @click="addFriend(friend._id)">
                  add friend
                </el-button>
              </el-col>
            </el-card>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <h1>Friend</h1>
    <el-row>
      <el-col>
        <div v-for="(friend, key) in friendList" :key="key" class="text item">
          <el-row>
            <el-card class="box-card">
              <el-col>
                <el-avatar
                  v-if="friend.avatar"
                  shape="circle"
                  :size="100"
                  fit="cover"
                  :src="imgUrl + friend.avatar"
                />
                <el-icon
                  v-else
                  class="avatar-uploader-icon"
                  style="width: 100px; height: 100px"
                ></el-icon>
              </el-col>
              <el-col>
                <span> {{ friend.user_id }} </span>
              </el-col>
              <el-col>
                <el-button type="primary" plain @click="deleteFriend(friend._id)">
                  delete friend
                </el-button>
              </el-col>
            </el-card>
          </el-row>
        </div>
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
      friendList: [],
      recFriendList: [],
    };
  },

  methods: {
    getFriend() {
      let me = this;
      axios.get(api.main.getFriend).then(function (response) {
        if (response.data.Code == 200) {
          me.friendList = response.data.Data;
          console.log(me.friendList);
        } else {
          alert(response.data.Msg);
        }
      });
    },

    getRecommendFriend() {
      let me = this;
      axios.get(api.main.getRecommendFriend).then(function (response) {
        if (response.data.Code == 200) {
          me.recFriendList = response.data.Data;
        } else {
          alert(response.data.Msg);
        }
      });
    },

    addFriend(userId) {
      axios
        .post(api.main.addFriend, { friendId: userId })
        .then(function (response) {
          if (response.data.Code == 200) {
          } else {
            alert(response.data.Msg);
          }
        });
    },

    deleteFriend(userId) {
      axios
        .delete(api.main.deleteFriend + `/${userId}`)
        .then(function (response) {
          if (response.data.Code == 200) {
          } else {
            alert(response.data.Msg);
          }
        });
    },
  },

  mounted() {
    this.getRecommendFriend();
    this.getFriend();
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
}
</style>