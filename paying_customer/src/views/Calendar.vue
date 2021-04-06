<template>
  <div class="container-fluid">
    <div class="blueLine"></div>
    <div class="row">
      <div class="col-md-5">
        <br /><br />
        <img
          style="width: 400px; margin-left: 10%; border-radius: 83px"
          src="@/assets/logoPC.png"
          class="img-fluid imgH"
          alt="Logo"
        />
        <div class="socialM" style="margin-left: 33%; margin-top: 10px">
          <a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
          <a href="#" class="fa fa-linkedin"></a>&nbsp;
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
      <div class="col-md-5 offset-md-1">
        <div class="limit">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FBelgrade&amp;src=ZnJyYjZpNXNjazRtYTBhajRrNGU2bGJmc29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aHIuY3JvYXRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%238E24AA&amp;color=%230B8043"
          style="border: solid 1px #777"
          width=100%
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.btn {
  transition: box-shadow 0.3s;
}
.btn:hover {
  box-shadow: 20px 20px 40px 0px #384f7b;
}
@media (max-width: 767px) {
  /* za sakrivanje prilikom smanjvanja window-a */
  .imgH {
    display: none;
  }
  .blueLine {
    display: none;
  }
  .socialM {
    display: none;
  }
  .col-md-5 {
    margin-top: -20px;
  }
}
</style>