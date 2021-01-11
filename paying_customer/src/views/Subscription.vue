<template>
        <div class="container-fluid">
	<div class="row">
		<authNavi/>
		<div class="col-md-3"></div>
		<div class="col-md-8">
			<div class="container">
        <p>"SUBSCRIPTION" --> ovo bi trebalo staviti gore u navi, tako za svaki link koji stisne. Gore desno, ako se moze narvno.</p><br>
        <div class="row">
          <subscriptionCard/>
          <subscriptionCard/>
          <subscriptionCard/>
        </div>
    </div>
	</div>
	</div>
    </div>
</template>

<script>
import authorized_navi from "@/components/authorized_navi.vue";
import subscriptionCard from "@/components/subscriptionCard.vue";

export default {
name: "Subscription",
components:{
	"authNavi" :authorized_navi,
	"subscriptionCard" :subscriptionCard
	},
}
</script>