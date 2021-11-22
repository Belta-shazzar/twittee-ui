<template>
  <div class="twits">
    <div class="title">
        <h3>Bookmarked Twit</h3>
        <img src="../../assets/Daniel-Okoronkwo.jpg" alt="profile-image" width="50" height="50" class="profile-image">
    </div>

    <div class="twits-container">
      <section v-for="i in 10" :key="i">
        <div class="user-info">
          <img src="../../assets/logo.png" alt="logo" width="50" height="50" />

          <div class="user">
            Daniel Okoronkwo • <small class="twit-time">37ms ago</small><br />
            <small>@Varsilias</small><br />
            <small>Joined: 3 years ago</small>
          </div>
        </div>
        <div class="twit">
          <p>
            We’re excited to announce the opening of our BioPlant in Yverdon,
            Switzerland. This milestone underscores our investment in strong
            science and our commitment to finding innovative solutions that
            positively impact patients’ lives.
          </p>
        </div>
        <div class="reaction-info">
          <div class="reply">
            <font-awesome-icon :icon="replyIcon" />
            3.5k
          </div>

          <div class="retweet">
            <font-awesome-icon :icon="retweetIcon" />
            257k
          </div>

          <div class="like">
            <font-awesome-icon :icon="likeIcon" />
            1k
          </div>

          <div class="like">
            <font-awesome-icon :icon="optionIcon" />
        </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BookmarksPage",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      replyIcon: faComment,
      retweetIcon: faRetweet,
      likeIcon: faHeart,
      optionIcon: faEllipsisV

    };
  },
};
</script>
<style scoped>
.twits {
  position: relative;
  background-color: rgb(196, 38, 124);
  color: rgb(129, 121, 121);
  flex-grow: 5;
  height: 100vh;
  width: 100%;
}

.title {
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  /* height: 50px; */
  /* position: absolute; */
  z-index: 1;
  left: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  color: #fff;
  box-shadow: 1px 5px 2px 1px rgba(0, 0, 255, 0.2);
}

.twits-container {
  /* margin-top: 50px; */
  overflow-y: scroll;
  /* height: 100%; */
  /* padding-top: 10px; */
  width: 100%;
  background-color: #fff;
  height: calc(100vh - 50px);
}

.twits-container h3 {
  padding-top: 7px;
  margin-left: 10px;
}

.create-twit {
  margin-top: 5px;
  max-width: 100%;
  border-bottom: 2px solid #333;
  position: relative;
}

.create-twit textarea {
  width: 100%;
  max-width: 100%;
  /* margin-right: 10px; */
  /* height: ; */
  max-height: 100px;
  padding: 20px 20px 0px 70px;
  overflow-y: hidden;
  resize: none;
  border: none;
  outline: none;
}

.create-twit textarea[placeholder] {
  font-size: 20px;
  font-family: "Roboto", "Times New Roman", Times, serif;
}

.create-twit img {
  position: absolute;
  top: 8px;
  left: 10px;
  border-radius: 50%;
  border: 2px solid #333;
}

section {
  /* height: 50%; */
  background-color: #fff;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  color: #333;
  border: 2px solid #333;
}

.user-info {
  height: 33%;
  /* border: 1px solid blue; */
  display: flex;
  font-weight: bold;
}

.user-info .twit-time {
  font-weight: normal;
}

.user-info img {
  border-radius: 50%;
  border: 2px solid #333;
}

.user-info img:hover {
  border-radius: 50%;
  border: 1px solid #333;
}

.user {
  padding-left: 7px;
  /* padding-top: 10px; */
}

.user:hover {
  text-decoration: underline;
  cursor: pointer;
}

.twit {
  height: 33%;
}

.twit p {
  padding: 20px 0 10px 0;
  text-align: start;
}

.reaction-info {
  height: 33%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reaction-info .reply:hover {
  content: "Reply";
  cursor: pointer;
}
.reaction-info .retweet:hover {
  content: "Retweet";
  cursor: pointer;
}

.reaction-info .like:hover {
  content: "Like";
  cursor: pointer;
}

.profile-image {
    border-radius: 50%;
}
</style>
