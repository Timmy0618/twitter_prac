const baseurl = "http://localhost:3000";

module.exports = {
  users: {
    add  : baseurl + "/users/add",
    login: baseurl + "/users/login",
  },
  main: {
    test   : baseurl + "/protected",
    post   : baseurl + "/api/v1/post",
    getPost: baseurl + "/api/v1/post/all",

    profile: baseurl + "/api/v1/profile",
    avatar : baseurl + "/api/v1/avatar",
    getImg : baseurl + "/api/v1/image/",

    getFriend         : baseurl + "/api/v1/friends",
    getRecommendFriend: baseurl + "/api/v1/friends/recommend",
    addFriend         : baseurl + "/api/v1/friends",
    deleteFriend      : baseurl + "/api/v1/friends",
  },
  post: {
    likePost   : baseurl + "/api/v1/post/like/",
  },
};
