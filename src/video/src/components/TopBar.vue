<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <router-link to="/Home">
      <el-menu-item> Home </el-menu-item>
    </router-link>
    <router-link to="/Profile">
      <el-menu-item>Profile</el-menu-item>
    </router-link>
    <router-link to="/Posts">
      <el-menu-item>Posts</el-menu-item>
    </router-link>
    <router-link to="/Friend">
      <el-menu-item> Friend </el-menu-item>
    </router-link>
    <router-link to="/Login">
      <el-menu-item> Login </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
export default {
  name: "TopBar",
  props: {},
};
</script>
