<template>
    <div class="signup">
        <Register />
    </div>
</template>

<script>
import Register  from "@/components/Auth/Register.vue"

export default {
    name: 'Signup',
    components: {
        Register
    }
}
</script>

<style scoped>
.signup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

@media screen and (max-width: 414px) {
.signup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* border: 5px solid rgb(105, 103, 103); */
    /* height: 100vh; */
}

}
</style>