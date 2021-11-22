<template>
  <div class="home">
    <div class="home-container">
      <SideBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/Base/SideBar'

export default {
    name: 'HomeLayout',
    components: {
        SideBar
    }
}
</script>

<style scoped>
.home {
  display: block;
  margin: 0 auto;
  background-color: red;
  height: 100vh;
  /* padding: 10px; */
  overflow-y: hidden;
}

.home-container {
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
}
</style>
