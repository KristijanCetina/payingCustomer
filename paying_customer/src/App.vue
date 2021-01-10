<template>
  <div>
    <div>
      <b-navbar toggleable="lg" class="naviStyle" type="dark">
        <b-navbar-brand to="/"
          ><img
            margin-left="30%"
            height="113px"
            width="113px"
            src="@/assets/logo_transparent.png"
            alt="Logo"
        /></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto">
            <b-nav-item v-if="!store.currentUser" to="/">HOME</b-nav-item>
            <b-nav-item v-if="!store.currentUser" to="/AboutUs"
              >ABOUT US</b-nav-item
            >
            <b-nav-item v-if="!store.currentUser" to="/Contact"
              >CONTACT</b-nav-item
            >
            <b-nav-item v-if="!store.currentUser" to="/Calendar"
              >CALENDAR</b-nav-item
            >
            <b-nav-item v-if="!store.currentUser" to="/News">NEWS</b-nav-item>
          </b-navbar-nav>

          <ul class="nav nav-pills">
            <li v-if="store.currentUser" class="nav-item">
              <router-link class="nav-link" to="/edit"
                ><p>Hello {{ store.userDisplayName }}</p></router-link
              >
            </li>

            <li v-if="!store.currentUser" class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li v-if="!store.currentUser" class="nav-item">
              <router-link class="nav-link" to="/signup">Sign up</router-link>
            </li>
            <!-- <li v-if="!store.currentUser" class="nav-item">
              <router-link class="nav-link" to="/forgot-password"
                >forgot password</router-link
              >
            </li> -->
            <li v-if="store.currentUser" class="nav-item">
              <a
                style="color: gray"
                class="nav-link"
                href="#"
                @click.prevent="logout()"
                >Logout</a
              >
            </li>
          </ul>
        </b-collapse>
      </b-navbar>
      <!-- da se ne vidi sidebar autoriziranog korisnika i admina-->
      <!-- <authorizedNavi
				v-if="
					![
						'Home',
						'AboutUs',
						'Contact',
						'Calendar',
						'News',
						'Users_admin',
						'Subscription_admin',
						'MyPayments_admin',
						'Calendar_admin',
						'News_admin',
						'Plan',
						'Signin',
						'Cancel',
						'Login',
						'AdminLogin',
						'ForgotPassword',
						'Options',
					].includes($route.name)
				"
			></authorizedNavi> -->
      <!-- <adminNavi
				v-if="
					![
						'Home',
						'AboutUs',
						'Contact',
						'Calendar',
						'News',
						'Subscription',
						'MyPayments',
						'Calendar_dash',
						'News_dash',
						'Plan',
						'Signin',
						'Cancel',
						'Login',
						'AdminLogin',
						'ForgotPassword',
						'Options',
					].includes($route.name)
				"
			></adminNavi> -->
    </div>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view /><br />
  </div>
</template>

<script>
// import authorized_navi from "@/components/authorized_navi.vue";
//import admin_navi from "@/components/admin_navi.vue";
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

firebase.auth().onAuthStateChanged(user => {
  const currentRoute = router.currentRoute;
  if (user) {
    // User is signed in.
    store.currentUser = user.email;
    store.userDisplayName = user.displayName;
    console.log("emailVerified:" + user.emailVerified);
    if (!currentRoute.meta.needsAuth) {
      router.push({ name: "Subscription" });
    }
  } else {
    // No user is signed in.
    store.currentUser = null;

    if (currentRoute.meta.needsAuth) {
      router.push({ name: "" });
    }
  }
});

export default {
  name: "app",
  // components: {
  // 	// authorizedNavi: authorized_navi,
  // 	adminNavi: admin_navi,
  // },
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/iconsSM.css";
body {
  background: linear-gradient(#f1f1f1, #f1f1f1);
}
h1,
p,
a {
  font-family: "Roboto", sans-serif;
}
.navbar-dark .navbar-nav .nav-link {
  color: #0066cc !important;
  font-size: 21px !important;
}
.naviStyle {
  background-color: #f1f1f1;
  height: 113px;
  z-index: 1;
}
.blueLine {
  position: fixed;
  top: 0px;
  right: 59%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #384f7b;
}
.nav-item {
  position: relative;
}
.navbar-collapse ul li a.nav-link:before {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: transparent;
  content: "";
  opacity: 0;
  -ms-transition: opacity 0.3s, -webkit-transform 0.3s;
  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
  transition: opacity 0.3s, transform 0.3s;
  -ms-transform: translateY(10px);
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
}
.navbar-collapse ul li:hover a.nav-link:before {
  opacity: 1;
  transform: translateY(0px);
  bottom: 0px;
  background: #0066cc;
}
@media (max-width: 991px) {
  .naviStyle {
    background-color: #384f7b;
    height: auto;
  }
  .naviText {
    color: #ffffff;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: #ffffff !important;
  }
}
</style>
