<template>
    <section class="edit-profile">
        <div class="edit-profile-container">
            <div class="title">
                <h3>Edit Profile</h3>
                <img src="../../assets/Daniel-Okoronkwo.jpg" alt="profile-image" width="50" height="50" class="header-profile-image">
            </div>

            <div class="edit-profile-container">
                <form>

                    <div class="names form-element">
                        <div class="firstname">
                            <label for="firstname">Firstname</label>
                            <input type="text" name="firstname" placeholder="Firstname">
                        </div>

                        <div class="lastname">
                            <label for="lastname">Lastname</label>
                            <input type="text" name="lastname" placeholder="Lastname">
                        </div>
                    </div>

                    <div class="form-element">
                        <label for="email">Email</label>
                        <input type="email"  placeholder="you@example.com"/>
                    </div>

                    <div class="form-element">
                        <label for="location">Location</label>
                        <input type="email"  placeholder="you@example.com"/>
                    </div>

                    <div class="form-element">
                        <textarea rows="10" cols="10" placeholder="A little info about yourself, don't worry just have fun"></textarea>
                    </div>

                    <div class="form-element">
                        <label for="phone">Phone no</label>
                        <input type="tel"  placeholder="661-724-7734"/>
                    </div>

                    <div class="form-element">
                        <label for="password">Password</label>
                        <input type="password"  placeholder="••••••••"/>
                    </div>

                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EditProfilePage'
}
</script>

<style scoped>
.edit-profile {
  position: relative;
  /* background-color: rgb(196, 38, 124); */
  background: coral;
  color: rgb(129, 121, 121);
  flex-grow: 5;
  height: 100vh;
  width: 100%;
}

.edit-profile-container {
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
</style>