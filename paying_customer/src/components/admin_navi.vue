<template>
      <div id="mySidenav" class="sidenav" ><br>
          <p><img width="40px" src="./../assets/logoPC.png" alt="Logo" style="border-radius: 50px">
            Paying Customer</p><hr style="background-color:#c8cad8;"><br>
       
            <b-navbar-nav vertical>
              <b-nav-item to="/Users_admin" active @click="hide"><a>
               <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" style="margin-right:9%">
            <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>          
                Users</a></b-nav-item>

              <b-nav-item to="/Subscription_admin" active @click="hide"><a>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16" style="margin-right:9%">
            <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
            <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            </svg>           
                Subsciption</a></b-nav-item>

              <b-nav-item to="/MyPayments_admin" @click="hide"><a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16" style="margin-right:9%">
            <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
            <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
            </svg>
                My Payments</a></b-nav-item>

                <b-nav-item to="/Calendar_admin" @click="hide"><a>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16" style="margin-right:9%">
          <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
          <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
          </svg>
                Calendar</a></b-nav-item>

                <b-nav-item to="/News_admin" @click="hide"><a>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16" style="margin-right:9%">
            <path fill-rule="evenodd" d="M2 1h12a1 1 0 0 1 1 1v11.586l-2-2A2 2 0 0 0 11.586 11H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
            <path fill-rule="evenodd" d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
                News</a></b-nav-item>
            </b-navbar-nav>
        </div>
</template>

<script>
export default {
  props: ["adminNavi"],
  name: "AdminNavi",
};
</script>

<style lang="scss" scoped>
.sidenav {
  height: 100%;
  width: 21%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #27282C;  
}
.sidenav p{
  padding: 10px 8px 10px 22px;
  text-decoration: none;      /* da mi ne iscrta crte ispod rijeci, sto je namjesteno u app.vue */
  font-size: 25px;
  color: #c8cad8;
  display: block;
}
.sidenav a{
  padding: 10px 8px 10px 11%;
  text-decoration: none;      /* da mi ne iscrta crte ispod rijeci, sto je namjesteno u app.vue */
  font-size: 19px;
  color:  #dddee7;
  display: block;
}
.sidenav a:hover {
  color:  #27282C;
  background-color: #ffffff;
}
.buttonStyle{
   width: 145px;
   height: 85px; 
   border-color: #27282C;
   color: #27282C;
   font-size:17px
}
.buttonStyle:hover{
  background-color: #27282C;
  color: #ffffff;
}
@media (max-width: 915px){
  .sidenav {
  width: 100%;
    height: auto;
    position: relative;
  }
}
.naviStyle{
  background-color: #f1f1f1;
  height: 113px;
  z-index: 1;
}
</style>