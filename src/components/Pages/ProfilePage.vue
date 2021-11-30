<template>
  <div class="profile">
    <div class="title">
        <h3>Daniel Okoronkwo</h3>
        <img src="../../assets/Daniel-Okoronkwo.jpg" alt="profile-image" width="50" height="50" class="header-profile-image">
    </div>

    <div class="profile-container">
        <section class="image-section">
            <img src="../../assets/logo.png" alt="cover-image" class="cover-image">
            <img src="../../assets/Daniel-Okoronkwo.jpg" alt="profile-image" width="200" height="200" class="profile-image">
        </section>

      <section class="bio-section">
        <h3>Daniel Okoronkwo</h3>
        <small>@varsilias</small>

        <div>
          <span class="joined"><strong>Joined:</strong> November 2019</span>

          <span class="location">
            <font-awesome-icon :icon="locationIcon" />
              Nigeria
          </span>
        </div>

        <p>Web developer | Backend developer(PHP/ Laravel & Node) | with a strong passion for business technology and start-ups.</p>
        <div class="follower">
          <span class="following"><strong>612</strong> Following</span>
          <span class="follower"><strong>64</strong> Followers</span>
        </div>
        <button @click="showEditProfilePage">{{ btnContent }}</button>
        <!-- <button>Follow</button> -->
      </section>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


export default {
  name: "ProfilePage",
  components: {
    FontAwesomeIcon,
  },

  data() {
    return {
      id: 10,
      btnContent: 'Follow',
      locationIcon: faMapMarkerAlt

    }
  },
  methods: {
    showEditProfilePage() {
      this.$router.push('/profile/edit/10')
    }

  },

  created() {
    // console.log(this.$route)
    if (this.$route.params.id == this.id) {
      this.btnContent = 'Edit Profile'
    }
  }
};
</script>
<style scoped>

.profile {
  position: relative;
  background-color: rgb(196, 38, 124);
  color: rgb(129, 121, 121);
  flex-grow: 5;
  height: 100vh;
  width: 100%;
}

.profile-container {
  overflow-y: scroll;
  width: 100%;
  background-color: #fff;
  height: 100vh;
}

.title {
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  z-index: 1;
  left: 0px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  color: #fff;
  box-shadow: 1px 5px 2px 1px rgba(0, 0, 255, 0.2);
}

.header-profile-image {
    border-radius: 50%;
}

.image-section {
  position: relative;
}

.cover-image {
  background-color: #000;
  display: block;
  width: 100%;
  height: 300px;
}

.profile-image {
  position: absolute;
  border-radius: 50%;
  top: 200px;
  left: 330px;
}

.bio-section {
  margin-top: 120px;
  text-align: center;
  /* line-height: 20px; */
}

.bio-section p {
  margin-top: 10px;
}

.bio-section .follower {
  /* display: flex; */
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
  /* width: 50%; */
}

.bio-section small {
  font-weight: bold;
  font-size: 14px;
}

.follower .following {
  margin-right: 10px;
}

.bio-section button {
  padding: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 20px;
  color: white;
  background-color: #333;
  box-shadow: 1px 5px 2px 1px rgba(0, 0, 255, 0.13);
  cursor: pointer;
}

.bio-section button:hover {
  padding: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 20px;
  color: white;
  background-color: rgba(95, 92, 92, 0.878);
  box-shadow: 1px 5px 2px 1px rgba(0, 0, 255, 0.13);
  cursor: pointer;
}

.bio-section > div {
  margin-top: 10px;
  font-weight: 400;
}

.bio-section .location {
  display: block;
  margin-bottom: 10px;
}

.bio-section .joined {
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  margin-top: 0;
}

</style>
