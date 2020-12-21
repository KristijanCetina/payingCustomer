<template>
 <div class="container-fluid">
   <div class="blueLine"></div>
  <div class="row">
    <div class="col-md-5"><br><br>
      <img style="width: 400px; margin-left: 10%; border-radius: 83px" src="@/assets/logoPC.png" class="img-fluid imgH" alt="Logo">
      <div class="socialM" style="margin-left: 33%; margin-top: 10px">
        <a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
        <a href="#" class="fa fa-linkedin"></a>&nbsp;
        <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
    <div class="col-md-5 offset-md-1"><br><h1 style="color: #384F7B; margin-left: 22%">LOREM IPSUM</h1><br>
    <p style="text-align: justify;">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare sem rutrum vestibulum accumsan. Fusce nec condimentum nulla. Cras cursus tristique lorem vitae vehicula. Phasellus bibendum tortor eget odio maximus, vel efficitur justo malesuada. Aenean a suscipit quam, quis pellentesque dui. Sed ac vehicula magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin lobortis metus eu risus viverra, accumsan blandit turpis semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat.
    </p><br><br>
    <button type="button" class="btn btn-lg position-absolute" style="margin-left: 29%; background-color:#384F7B; color:#ffffff">CHOOSE PLAN</button>
    </div>     
  </div> 
</div>
</template>


<style scoped>
 .btn{
    transition: box-shadow 0.3s;
  }
.btn:hover{
    box-shadow: 20px 20px 40px 0px #384F7B;
  }
@media (max-width: 767px){    /* za sakrivanje prilikom smanjvanja window-a */
  .imgH { display: none; }
  .blueLine { display: none; }
  .socialM { display: none; }
  .col-md-5 { margin-top: -20px;}                                        
}   
</style>