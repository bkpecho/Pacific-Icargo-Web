import { async } from '@firebase/util'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import Landingpage from '../views/Landingpage.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
  path: '/',
  name: 'Landingpage',
  component: Landingpage
  },
    //Signup
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/customer-signup',
      name: 'customer-signup',
      component: () => import('../views/CustomerSignup.vue')
    },
    {
      path: '/merchant-signup',
      name: 'merchant-signup',
      component: () => import('../views/MerchantSignup.vue')
    },
    {
      path: '/partner-signup',
      name: 'partner-signup',
      component: () => import('../views/PartnerSignup.vue')
    },

    //Signin
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/customer-signin',
      name: 'customer-signin',
      component: () => import('../views/CustomerSignIn.vue')
    },
    {
      path: '/merchant-signin',
      name: 'merchant-signin',
      component: () => import('../views/MerchantSignIn.vue')
    },

    {
      path: '/partner-signin',
      name: 'partner-signin',
      component: () => import('../views/PartnerSignIn.vue')
    },

  
    //dashboard
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: {
       requiresAuth: true
     }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})
export default router
