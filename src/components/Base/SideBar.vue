<template>
    <div class="sidebar">
        <div class="sidebar-container">
            <div class="brand">
                <font-awesome-icon :icon="twitteeIcon" />
                Twittee
            </div>

            <nav>
                <ul>
                    <li :class="toggleActiveClass('/home')">
                        <router-link to="/home">
                            <font-awesome-icon :icon="homeIcon" />
                            Home
                        </router-link>
                    </li>
                    
                    <li :class="toggleActiveClass('/twits')">
                        <router-link to="/twits">
                            <font-awesome-icon :icon="allTwitIcon" />
                            Your Twits
                        </router-link>

                    </li>

                    <li :class="toggleActiveClass('/bookmarks')">
                        <router-link to="/bookmarks">
                            <font-awesome-icon :icon="bookmarkIcon" />
                            Bookmarks
                        </router-link>

                        
                    </li>

                    <li :class="toggleActiveClass('/notifications')">
                        <router-link to="/notifications">
                            <font-awesome-icon :icon="notifIcon" />
                            Notifications
                        </router-link>
                    </li>

                    <li>
                        <font-awesome-icon :icon="messageIcon" />
                        Messages
                    </li>

                    <li>
                        <font-awesome-icon :icon="profileIcon" />
                        Profile
                    </li>

                    <li>
                    <font-awesome-icon :icon="settingIcon" />
                        Settings
                    </li>

                    <li>
                    <font-awesome-icon :icon="logoutIcon" />
                        Logout
                    </li>

                </ul>
            </nav>

            <hr>

            <div class="twit">
                <span>
                    <font-awesome-icon :icon="createTwit"/>
                    Twit
                </span>
            </div>

        </div>
    </div>
</template>

<script>
/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



export default {
    name: 'SideBar',
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            homeIcon: faHome,
            profileIcon: faUser,
            favoriteTwitIcon: faHeart,
            allTwitIcon: faGlobe,
            messageIcon: faEnvelope,
            createTwit: faPlus,
            twitteeIcon: faTwitter,
            settingIcon: faCog,
            bookmarkIcon: faBookmark,
            notifIcon: faBell,
            logoutIcon: faSignOutAlt



        }
    },

    methods: {
        toggleActiveClass(path) {
            if(this.$route.path == path) {
                return 'router-link-active'
            }

            return ''
        }
    }
}
</script>

<style scoped>
.sidebar {
    background-color: white;
    padding: 20px;
    flex-grow: 1;
    border: 5px solid #333;
    width: 500px;
}

.sidebar-container {
    display: block;
    background: rgb(255, 255, 255);
    color: rgb(83, 81, 81);
    width: 100%;
    height: 100%;
    overflow: hidden;

}

.brand {
    padding-left: 20px;
    margin-top: 20px;
    /* background-color: rgb(250, 250, 234); */
    font-size: 32px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-style: oblique;

}

nav ul {
    line-height: 50px;
    padding-top: 30px;

}
nav ul li {
    list-style-type: none;
    text-decoration: none;
    font-size: 16px;
    padding-left: 20px;
    cursor: pointer;
}

.router-link-active {
    text-decoration: none;
    background-color: rgb(121, 114, 114);
    font-size: 18px;
    margin-left: 10px;
    transition: margin-left .5s ease-in-out;
    color: white;
    /* padding: 10px; */
    width: 100%;
}

.router-link-active:hover {
    text-decoration: none;
    background-color: rgb(121, 114, 114);
    font-size: 18px;
    margin-left: 15px;
    transition: margin-left .5s ease-in-out;
    color: white;
}

nav ul li a {
    color: inherit;
    text-decoration: none;
    width: 100%;

}

/* nav ul li a:hover {
    text-decoration: none;
    background-color: #333;
    font-size: 18px;
    transition: margin-left .5s ease-in-out;
    /* color: white; *
} 

 nav ul li:hover {
    background-color: #333;
    font-size: 18px;
    margin-left: 15px;
    transition: margin-left .5s ease-in-out;
    color: white;
} */


hr {
    margin-top: 20px;
    margin-bottom: 50px;
}

.twit {
    margin-top: 90px;
    /* background-color: yellow; */

}

.twit span {
    padding-left: 20px;
    font-size: 20px;
    cursor: pointer;
    height: 100%;
    width: 100%;
    /* background-color: teal; */
}

.twit > span > svg {
    width: 20px;
    height: 20px;
    /* background-color: rgb(196, 11, 11); */
    border-radius: 50%;
}

</style>