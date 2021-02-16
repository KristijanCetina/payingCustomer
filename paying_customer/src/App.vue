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

          <ul class="nav">
            <b-dropdown
              v-if="store.currentUser"
              id="dropdown-right"
              variant="info"
              size="lg"
              right
              text="Profile"
              class="m-2"
            >
              <b-dropdown-item to="/edit"
                >{{ store.userDisplayName }}
                <span v-if="store.userIsAdmin"> - admin</span>
                <span v-else> - user vulgaris</span>
              </b-dropdown-item>
              <b-dropdown-item to="/signup" @click.prevent="logout()"
                >Log Out</b-dropdown-item
              >
            </b-dropdown>

            <li v-if="!store.currentUser" class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li v-if="!store.currentUser" class="nav-item">
              <router-link class="nav-link" to="/signup">Sign up</router-link>
            </li>
          </ul>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view /><br />
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";
import router from "@/router";

const admins = [
  "iOV0SSPc3Pd6ed5BuNsHT6jeSIp2", //Kristijan
  "bvVmyBHK2PZJJQrXJWfFDNDnO4p1", //Đovana
  "ejjTbGCCTjN8LJhNB4fRQZw3qJb2", //Marko
];

firebase.auth().onAuthStateChanged(user => {
  const currentRoute = router.currentRoute;
  if (user) {
    // User is signed in.
    store.currentUser = user.email;
    store.userDisplayName = user.displayName;
    console.log("emailVerified:" + user.emailVerified);

    if (admins.includes(user.uid)) {
      store.userIsAdmin = true;
      console.log("user je admin");
    } else {
      store.userIsAdmin = false; // iako je po default false neka se nađe.
    }

    if (!currentRoute.meta.needsAdmin && store.userIsAdmin){
      router.push({ name: 'Users_admin'});
    }
    else if(!currentRoute.meta.needsUser && store.currentUser && !store.userIsAdmin){
      router.push({ name: 'Subscription'});
    } 
    
  } else {
    // No user is signed in.
    store.currentUser = null;
    store.userIsAdmin = false;

    if (currentRoute.meta.needsUser || currentRoute.meta.needsAdmin) {
      router.push({ name: "Login" });
    }
  }
});

export default {
  name: "app",
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
