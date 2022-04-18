import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/Home.vue";
import Login from "../src/views/Login.vue";
import CreateAccount from "../src/views/CreateAccount.vue";
import Profile from "../src/views/Profile.vue";
import Posts from "../src/views/Posts.vue";
import Friends from "../src/views/Friend.vue";

const routes = [
  { path: "/Home", name: "Home", component: Home },
  { path: "/Login", name: "Login", component: Login },
  { path: "/CreateAccount", name: "CreateAccount", component: CreateAccount },
  { path: "/Profile", name: "Profile", component: Profile },
  { path: "/Posts", name: "Posts", component: Posts },
  { path: "/Friend", name: "Friend", component: Friends },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
