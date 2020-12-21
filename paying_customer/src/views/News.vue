<template>
<div>
  <div class="blueLine"></div>
<div class="container-fluid">
  <div class="row">
    <div class="col-5 imgH"><br><br>
       <img style="width: 400px; margin-left: 53px; border-radius: 83px" src="@/assets/logoPC.png" class="img-fluid" alt="Logo">
   <div style="margin-left: 32%; margin-top: 10px">
        <a href="#" class="mx auto fa fa-facebook"></a>&nbsp;
        <a href="#" class="fa fa-linkedin"></a>&nbsp;
        <a href="#" class="fa fa-instagram"></a>
        </div>
    </div>
    <div class="col-7"><h1 style="color: #384F7B">NEWS</h1><br>
    <div class="row">
      <newsCard v-for="news in news" :key="news.id" :name="news.name" :tekst="news.tekst"></newsCard>        
      </div>
    </div>
  </div>
</div>
</div>
</template>



<script>
import newsCard from "./../components/newsCard";
export default {
  name: 'app',
  components: {
    "newsCard": newsCard 
  },
  mounted(){
    this.fetchData();
  },
  data(){
    return {
      news: []

    };
  },
  methods:{
    async fetchData(){
      const res = await fetch("news.json");
      const val = await res.json();
      this.news = val; 
      console.log(val);

    }
  }
};
</script>



<style scoped>
@media (max-width: 1000px){
  .imgH { 
  display: none; 
  }
  .blueLine { display: none; }   
  .col-7{
    margin:auto;
  }                                     
}                                              
</style>