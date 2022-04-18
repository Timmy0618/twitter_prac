<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <TopBar />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <LeftSideBar />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftSideBar from "./components/LeftBar.vue";
import TopBar from "./components/TopBar.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    LeftSideBar,
    TopBar,
  },
  methods: {
    checkJWT() {
      if (localStorage.token) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${localStorage.token}`;
      }
    },
  },
  mounted() {
    this.checkJWT();
  },
};
</script>
