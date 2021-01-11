<template>
 <div class="container-fluid">
     <div class="blueLine"></div>
  <div class="row">
    <div class="col-xs-6 col-md-5 imgH"><br><br>
      <img style="width: 400px; margin-left: 53px; border-radius: 83px" src="@/assets/logoPC.png" class="img-fluid" alt="Logo">
      <div style="margin-left: 33%; margin-top: 10px">
        <a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
        <a href="#" class="fa fa-linkedin"></a>&nbsp;
        <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
    <div class="col-xs-6 col-md-7">
    <div class="container">
        <h1 class="centerTitle" style="color: #384F7B">PLANS</h1><br>
        <div class="row">
          <subscriptionCard v-for="plan in plans" :key="plan.id" 
          :cijena="plan.cijena" 
          :tekst="plan.tekst" 
          :slika="plan.slika"
          :naziv="plan.naziv"
          ></subscriptionCard>                  
        </div>
    </div>
   </div>     
  </div> 
</div>
</template>



<script>
import subscriptionCard from "@/components/subscriptionCard.vue";

export default {
name: "Subscription",
components:{
	"subscriptionCard" :subscriptionCard
  },
    mounted(){
    this.fetchData();
  },
  data(){
    return {
      plans: [],
    };
  },
  methods:{
    async fetchData(){
      const pes = await fetch("plans.json");
      const zim = await pes.json();
      this.plans = zim;
      console.log(zim);
    },
  }
};
</script>



<style lang="scss" scoped>
@import './../assets/contactCard.scss';

@media (max-width: 1150px){
  .imgH { display: none; }
  .blueLine { display: none; } 
  .centerTitle {margin-top: 20px;}  
  .col-md-7{
      margin: auto;
      width: 80%;
      padding-left: 0px;
      padding-right: 0px;
  }                                               
}   
</style>