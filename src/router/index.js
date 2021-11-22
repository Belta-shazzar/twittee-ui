import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import HomeLayout from '../Layouts/HomeLayout.vue'


const routes = [
  {
    path: '',
    name: '',
    component: HomeLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      },

      {
        path: '/twits',
        name: 'Twits',
        component: () => import(/* webpackChunkName: "about" */ '../views/Twits.vue'),
      },

      {
        path: '/bookmarks',
        name: 'Bookmarks',
        component: () => import(/* webpackChunkName: "about" */ '../views/Bookmarks.vue'),
      },
      {
        path: '/notifications',
        name: 'Notification',
        component: () => import(/* webpackChunkName: "about" */ '../views/Notification.vue'),
      }
    ]
  },

  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Auth/Signup.vue')
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
