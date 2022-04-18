const baseurl = "http://localhost:3000";

module.exports = {
  users: {
    add: baseurl + "/users/add",
    login: baseurl + "/users/login",
  },
  main: {
    test: baseurl + "/protected",
    post: baseurl + "/api/v1/post",
    profile: baseurl + "/api/v1/profile",
    avatar: baseurl + "/api/v1/avatar",
    getPost: baseurl + "/api/v1/all-post",
    getImg: baseurl + "/api/v1/image/",
  },
};
