<template>
  <div class="container-fluid">
    <div class="row">
      <authNavi />
      <div class="col-md-3"></div>
      <div class="col-md-8">
        <div class="container">
          <h1>Dobro došli!</h1>
          <h4>Trenutno koristite sljedeću pretplatu:</h4>
          <h2>
            {{ this.subUser }}
          </h2>

          <!-- trenutno ovo ne prikazujem vec samo trenutnu pretplatu 
            <div class="row">
            <subscriptionCard
              v-for="plan in plans"
              :key="plan.id"
              :cijena="plan.cijena"
              :tekst="plan.tekst"
              :slika="plan.slika"
              :naziv="plan.naziv"
            ></subscriptionCard>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authorized_navi from "@/components/authorized_navi.vue";
// import subscriptionCard from "@/components/subscriptionCard.vue";
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "Subscription",
  components: {
    authNavi: authorized_navi,
    // subscriptionCard: subscriptionCard,
  },
  data() {
    return {
      plans: [],
      subUser: null,
    };
  },
  mounted() {
    // this.fetchData();
    this.subTypeGet();
  },
  methods: {
    subTypeGet() {
      db.collection("users")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            if (data.email === store.currentUser) {
              console.log("iz baze", data.subscription);
              console.log("od korisnika", store.currentUser);
              if (data.subscription === "price_1IAe1JB4jY1Sj3hiIzWb257u") {
                this.subUser = "Junior - 150kn";
              } else if (
                data.subscription === "price_1IAe2sB4jY1Sj3hiGgaywwAH"
              ) {
                this.subUser = "Mid-Level - 250kn";
              } else if (
                data.subscription === "price_1IAe3NB4jY1Sj3hiA9YhObsP"
              ) {
                this.subUser = "Senior - 500kn";
              } else {
                this.subUser = "Trenutno nemate aktivne pretplate!";
              }
            }
          });
        })
        .catch((error) => {
          alert("doslo je do greske", error);
        });
    },
    // fetchData() {
    //   console.log('proba fetchData');
    //   this.userReg.json();
    // },
  },
};
</script>
