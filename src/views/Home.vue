<template>
  <div class="home">
      <HomePage />
  </div>
</template>

<script>
import HomePage from '@/components/Pages/HomePage.vue'


export default {
  name: 'Home',
  components: {
    HomePage,
  }
}
</script>

<style scoped>
/* .home {
  display: block;
  margin: 0 auto;
  background-color: red;
  height: 100vh;
  /* padding: 10px; 
  overflow-y: hidden;
}

.home-container {
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
} */

</style>
