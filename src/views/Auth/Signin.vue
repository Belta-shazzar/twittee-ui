<template>
    <div class="signin">
        <Login />
    </div>
</template>

<script>
import Login  from "@/components/Auth/Login.vue"

export default {
    name: 'Signin',
    components: {
        Login
    }
}
</script>

<style scoped>
.signin {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 100px;
}

@media screen and (max-width: 414px) {
.signin{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 100px;
}
}
</style>