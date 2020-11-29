<template>
  <div>     
      <div>
  <b-navbar style="background-color: #F1F1F1; height: 113px" toggleable="lg" >
    <b-navbar-brand to="/"><img margin-left="30%" height="113px" width="113px" src="@/assets/logo_transparent.png" alt="Logo"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto" style="font-family: 'Roboto', sans-serif;">
        <b-nav-item to="/"><a style="color: #0066CC">HOME</a></b-nav-item>
        <b-nav-item to="/AboutAs"><a style="color: #0066CC">ABOUTUS</a></b-nav-item>
        <b-nav-item to="/Contact"><a style="color: #0066CC">CONTACT</a></b-nav-item>
        <b-nav-item to="/Calendar"><a style="color: #0066CC">CALENDAR</a></b-nav-item>
        <b-nav-item to="/News"><a style="color: #0066CC">NEWS</a></b-nav-item>
      </b-navbar-nav>
      <b-button variant="outline-primary" style="width:145px; height: 85px; ">LOG IN</b-button>
    </b-collapse>
  </b-navbar>
</div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
        <router-view/><br>
  </div>
</template>





<style lang="scss">
body {
  background-color: #F1F1F1;
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
    content: '';
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
	background: #0066CC;
}
</style>




