import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store";
import AboutUs from '../views/AboutUs.vue'
import Contact from '../views/Contact.vue'
import Calendar from '../views/Calendar.vue'
import News from '../views/News.vue'
import Cancel from '../views/Cancel.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Subscription from '../views/Subscription.vue'
import MyPayments from '../views/MyPayments.vue'
import Calendar_dash from '../views/Calendar_dash.vue'
import News_dash from '../views/News_dash.vue'
import Users_admin from '../views/admin/Users_admin.vue'
import Subscription_admin from '../views/admin/Subscription_admin.vue'
import MyPayments_admin from '../views/admin/MyPayments_admin.vue'
import Calendar_admin from '../views/admin/Calendar_admin.vue'
import News_admin from '../views/admin/News_admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutUs
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/cancel',
    name: 'Cancel',
    component: Cancel,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue')
  },
  {
    path: '/options',
    name: 'Options',
    component: () => import('../views/Options.vue')
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription,
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/Edit.vue'),
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/mypayments',
    name: 'MyPayments',
    component: MyPayments,
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/calendar_dash',
    name: 'Calendar_dash',
    component: Calendar_dash,
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/news_dash',
    name: 'News_dash',
    component: News_dash,
    meta: {
      needsUser: true,
    },
  },
  {
    path: '/users_admin',
    name: 'Users_admin',
    component: Users_admin,
    meta: {
      needsUser: true,
      needsAdmin: true,
    },
  },
  {
    path: '/subscription_admin',
    name: 'Subscription_admin',
    component: Subscription_admin,
    meta: {
      needsUser: true,
      needsAdmin: true,
    },
  },
  {
    path: '/myPayments_admin',
    name: 'MyPayments_admin',
    component: MyPayments_admin,
    meta: {
      needsUser: true,
      needsAdmin: true,
    },
  },
  {
    path: '/calendar_admin',
    name: 'Calendar_admin',
    component: Calendar_admin,
    meta: {
      needsUser: true,
      needsAdmin: true,
    },
  },
  {
    path: '/News_admin',
    name: 'News_admin',
    component: News_admin,
    meta: {
      needsUser: true,
      needsAdmin: true,
    },
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(
    "Bio sam na",
    from.name,
    "idem na",
    to.name,
    "a korisnik je",
    store.currentUser
  );
  const noUser = store.currentUser === null;
  if (noUser && to.meta.needsUser) {
    next("Login");
  } 
  else if(!noUser && to.meta.needsAdmin){
    next("Subscription_admin") //vidjet cu gdje da preusmejravam
  }
    else {
    next();
  }
});

export default router