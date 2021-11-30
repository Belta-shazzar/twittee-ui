import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import HomeLayout from '../Layouts/HomeLayout.vue'


const routes = [
  {
    path: '',
    name: '',
    component: HomeLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },

      {
        path: '/twits',
        name: 'Twits',
        component: () => import('../views/Twits.vue'),
      },

      {
        path: '/bookmarks',
        name: 'Bookmarks',
        component: () => import('../views/Bookmarks.vue'),
      },
      {
        path: '/notifications',
        name: 'Notification',
        component: () => import('../views/Notification.vue'),
      },
      {
        path: '/profile/:id',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
      },

      {
        path: '/profile/edit/:id',
        name: 'EditProfile',
        component: () => import('../views/EditProfile.vue'),
      },
      
    ]
  },

  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Auth/Signup.vue')
  },

  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Auth/Signin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
