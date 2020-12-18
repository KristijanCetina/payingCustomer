<template>
  <div>
    <div>
      <!-- da se ne vidi glavni navibar u autoriziranom dijelu -->
      <b-navbar v-if="!['Subscription','MyPayments','Calendar_dash','News_dash','Users_admin','Subscription_admin','MyPayments_admin','Calendar_admin','News_admin'].includes($route.name)"   
        style="background-color: #f1f1f1; height: 113px"
        toggleable="lg"
      >
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
          <b-navbar-nav
            class="mx-auto"
            style="font-family: 'Roboto', sans-serif"
          >
            <b-nav-item to="/"><a style="color: #0066cc">HOME</a></b-nav-item>
            <b-nav-item to="/AboutUs"
              ><a style="color: #0066cc">ABOUT US</a></b-nav-item
            >
            <b-nav-item to="/Contact"
              ><a style="color: #0066cc">CONTACT</a></b-nav-item
            >
            <b-nav-item to="/Calendar"
              ><a style="color: #0066cc">CALENDAR</a></b-nav-item
            >
            <b-nav-item to="/News"
              ><a style="color: #0066cc">NEWS</a></b-nav-item
            >
          </b-navbar-nav>
          <b-button variant="outline-primary" style="width: 145px; height: 85px"
            >LOG IN</b-button
          >
        </b-collapse>
      </b-navbar>
      <!-- da se ne vidi sidebar autoriziranog korisnika i admina-->
      <authorizedNavi v-if="!['Home','AboutUs','Contact','Calendar','News','Users_admin','Subscription_admin','MyPayments_admin','Calendar_admin','News_admin','Plan','SignIn','Cancel','Login'].includes($route.name)"></authorizedNavi>
      <adminNavi v-if="!['Home','AboutUs','Contact','Calendar','News','Subscription','MyPayments','Calendar_dash','News_dash','Plan','SignIn','Cancel','Login'].includes($route.name)"></adminNavi>
    </div>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view /><br />
  </div>
</template>



<script>
import authorized_navi from "@/components/authorized_navi.vue";
import admin_navi from "@/components/admin_navi.vue";
export default {
  name: 'app',
  components: {
    "authorizedNavi": authorized_navi,
    "adminNavi": admin_navi
  }
}
</script>



<style lang="scss">
@import './assets/iconsSM.css';
body {
    background: linear-gradient(#f1f1f1, #f1f1f1);
}
h1,p,a{
  font-family: 'Roboto', sans-serif;
}
.blueLine {
    position: fixed;
    top: 0px;
    right: 59%;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #384F7B;
}
.nav-item {
  position: relative;
}
.navbar-collapse ul li a.nav-link:before {
  position: absolute;
  bottom: -5px;
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
  -ms-transform: translateY(0px);
  -webkit-transform: translateY(0px);
  transform: translateY(0px);
  bottom: 0px;
  background: #0066cc;
}
</style>