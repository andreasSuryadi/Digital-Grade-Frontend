import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// For Auth
import Login from '@/views/Authentication/Login'
import Home from '@/views/Authentication/Home'

// For Dashboard
import Dashboard from '@/views/Dashboard/Dashboard'
<<<<<<< HEAD
import Profile from '@/views/Profile/Profile'
=======
import Teacher from '@/views/Teacher/IndexTeacher'
>>>>>>> 380290f243794548dc26fe12759b3d2c3dd861ff

Vue.use(VueRouter)

const routes = [
  /** For Auth */
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  /** End For Auth */

  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      /** For Dashboard */
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      },

      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      /** End For Dashboard */

      /** For Teacher */
      {
        path: "/teacher",
        name: "Teacher",
        component: Teacher,
        meta: { requiresAuth: true }
      }
      /** End For Teacher */
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.querySelector('html').style.overflow = 'auto'
  let isAuthenticated = store.getters['auth/isLoggedIn']
  // let isAuthenticated = false;
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    if (to.matched.some(record => record.meta.redirect)) {
      next({ name: 'Login', query: { redirect: to.path } })
    } else {
      next({ name: 'Login' })
    }
  } else if (
    (to.name === 'Login' || to.name === 'Register') &&
    isAuthenticated
  ) {
    next('/')
  } else {
    next()
  }
})

export default router
