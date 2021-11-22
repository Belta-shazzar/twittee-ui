<template>
    <section>
        <div>
            <h4>Join <em>Twittee</em></h4>
        </div>

        <div class="social">
            <ul>
                <li>
                   <font-awesome-icon :icon="googleIcon" />
                    Sign up with Google
                </li>
                <!-- <li>
                     <font-awesome-icon :icon="githubIcon" />
                    Github
                </li> -->
                <!-- <li>
                     <font-awesome-icon :icon="appleIcon" />
                    Apple
                </li> -->
            </ul>
        </div>
            <span class="divider">OR</span>
        <form>
            <!-- <div class="form-element">
                <label for="firstname">Firstname</label>
                <input type="text"  placeholder="John"/>
            </div>

            <div class="form-element">
                <label for="lastname">Lastname</label>
                <input type="text"  placeholder="Doe"/>
            </div> -->

            <div class="form-element">
                <label for="username">Username</label>
                <input type="text"  placeholder="Jondodo"/>
            </div>

            <div class="form-element">
                <label for="phone">Phone no</label>
                <input type="number"  placeholder="+1(0) 946 7343"/>
            </div>

            <div class="form-element">
                <label for="email">Email</label>
                <input type="email"  placeholder="you@example.com"/>
            </div>

            <div class="form-element">
                <label for="password">Password</label>
                <input type="password"  placeholder="••••••••"/>
            </div>

            <div class="form-element">
                <label for="confirm-password">Re-enter Password</label>
                <input type="password"  placeholder="••••••••"/>
            </div>

            <div class="privacy-policy">
                <input type="checkbox" name="agree" id="agree">
                I Agree to Twittee privacy policy
            </div>

            <div class="form-element">
                <button>Join</button>
            </div>

            <div class="already-user">
                <span>Already a user? <router-link to="/signin">Login</router-link></span>
            </div>
    </form>

    </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

export default {
    name: 'Register',
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            googleIcon: faGoogle,
            githubIcon: faGithub,
            appleIcon: faApple


        }
    }
}
</script>

<style scoped>
section {
    border: 1px solid black;
    margin: 10px auto;
    height: 100%;
    width:  30%;
    padding: 20px;
}

section h4 {
    text-align: start;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
}

.social {
    margin-bottom: 10px;
}

.social ul li {
    list-style-type: none;
    text-decoration: none;
    line-height: 20px;
    text-align: center;
    background-color: #333;
    margin: 15px auto;
    width: 100%;
    color: white;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 1px 5px 2px 1px rgba(0, 0, 255, 0.13);
    cursor: pointer;

}

.social ul li:hover {
    list-style-type: none;
    text-decoration: none;
    line-height: 20px;
    text-align: center;
    background-color: rgba(248, 244, 244, 0.878);
    margin: 15px auto;
    width: 100%;
    color: #333
;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 1px 5px 2px 1px rgba(0, 0, 255, 0.13);
    cursor: pointer;
}

.divider {
    display: block;
    text-align: center;
    font-weight: bold;
    width: 100%;
}

form {
    margin-top: 10px;
    line-height: 30px;
    width: 100%;

}

.form-element label {
    display: block;
}

.form-element input {
    padding: 10px;
    width: 100%;
}

.form-element input:focus {
    padding: 10px;
    width: 100%;
    outline: none;
    border: 1px solid #333;
}

form button {
    text-align: center;
    background-color: #333;
    margin: 15px auto;
    width: 100%;
    color: white;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 1px 5px 2px 1px rgba(0, 0, 255, 0.13);
    outline: none;
    border: none;
    cursor: pointer;

}

form button:hover {
    text-align: center;
    background-color: rgba(248, 244, 244, 0.878);
    margin: 15px auto;
    width: 100%;
    color: #333;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 1px 5px 2px 1px rgba(0, 0, 255, 0.13);
    outline: none;
    border: none;
    cursor: pointer;


}

.privacy-policy {
    display: flex;
    padding-top: 10px;
    justify-content: flex-start;
    align-items: center;
}

.privacy-policy input {
    margin-right: 5px;
}

.already-user span {
    display: block;
    text-align: center;
    font-size: 14px;
}

.already-user span a {
    color: rgb(32, 32, 141);
}

@media screen and (max-width: 414px) {
section {
    border: none;
    margin: 0px auto;
    width:  100%;
    padding: 20px;
}

}

</style>