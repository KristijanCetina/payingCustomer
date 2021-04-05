<template>
  <div class="container-fluid">
    <div class="blueLine"></div>
    <br /><br /><br />
    <div class="row">
      <div class="col changeColor" style="color: #ffffff;">
        <h1 class="changeColor">Paying Customer</h1>
        <br /><br />
        <b-carousel
          id="carousel"
          indicators
          style="margin-left: -65px; margin-right: -30px;"
        >
          <br /><br /><br /><br /><br /><br />
          <b-carousel-slide
            ><p style="text-align: left;">
              The way you get started is to quit talking and begin doing.
            </p>
            <p style="text-align: left;">Walt Disney</p></b-carousel-slide
          >
          <b-carousel-slide
            ><p style="text-align: left;">
              Insanity: doing the same thing over and over again and expecting
              different results.
            </p>
            <p style="text-align: left;">Albert Einstein</p></b-carousel-slide
          >
          <b-carousel-slide
            ><p style="text-align: left;">
              Vision without execution is just hallucination.
            </p>
            <p style="text-align: left;">Henry Ford X</p></b-carousel-slide
          >
          <b-carousel-slide
            ><p style="text-align: left;">
              That’s one small step for a man, one giant leap for mankind.
            </p>
            <p style="text-align: left;">Neil Armstrong</p></b-carousel-slide
          >
          <b-carousel-slide
            ><p style="text-align: left;">
              Education is the most powerful weapon which you can use to change
              the world.
            </p>
            <p style="text-align: left;">Nelson Mandela</p></b-carousel-slide
          >
        </b-carousel>
        <br /><br /><br /><br />
        <div class="marginSocialM" style="margin-left: 31%;">
          <a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
          <a href="#" class="fa fa-linkedin"></a>&nbsp;
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
      <div class="col-sm">
        <img
          class="imgH"
          style="width: 400px; border-radius: 83px"
          src="@/assets/logoPC.png"
          alt="Logo"
        />
      </div>
      <div class="col">
        <h1>Make your payments easier</h1>
        <br /><br />
        <p>We will ensure you get the best experience with Paying Customer</p>
        <br />
        <b-button to="/options" type="button" class="btn btn-lg position-absolute marginButton" style="background-color:#384F7B">
          GET STARTED</b-button>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  transition: box-shadow 0.3s;
}
.btn:hover {
  box-shadow: 15px 15px 30px 0px #384f7b;
}
.marginButton {
  margin-left: 22%;
  margin-top: 25%;
}
@media (max-width: 1070px) {
  /* za sakrivanje prilikom smanjvanja window-a */
  .imgH {
    display: none;
  }
}
@media (max-width: 575px) {
  .blueLine {
    display: none;
  }
  .changeColor {
    color: #000000;
    margin-top: -25px;
  }
  p {
    color: #000000;
  }
  .marginSocialM {
    margin-top: -120px;
    margin-top: -120px;
    margin-bottom: 20px;
  }
  .marginButton {
    margin-left: 38%;
    margin-top: 10%;
  }
}
</style>
