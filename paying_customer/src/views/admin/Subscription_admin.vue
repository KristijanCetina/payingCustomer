<template>
        <div class="container-fluid">
	<div class="row">
		<authNavi/>
		<div class="col-md-3"></div>
		<div class="col-md-8">
			<div class="container">
        <p>"SUBSCRIPTION" --> ovo bi trebalo staviti gore u navi, tako za svaki link koji stisne. Gore lijevo, ako se moze narvno.</p><br>
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
import authorized_navi from "@/components/admin_navi.vue";
import subscriptionCard from "@/components/subscriptionCard.vue";

export default {
name: "Subscription",
components:{
	"authNavi" :authorized_navi,
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