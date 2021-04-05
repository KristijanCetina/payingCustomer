<template>
  <div class="container-fluid">
    <div class="row">
      <adminNavi />
      <div class="col-md-3"></div>
      <div class="col-md-9">
        <div class="w-75 p-3">
          <h1>Uredite pretplatu!</h1>

          <form>
            <div class="form-group">
              <input
                :value="suma"
                type="suma"
                class="form-control"
                id="suma"
                aria-describedby="emailHelp"
                placeholder="Unesite vrijednost pretplate, npr. 300kn"
              />
            </div>
            <div class="form-group">
              <input
                v-model="slika"
                type="slika"
                class="form-control"
                id="slika"
                placeholder="URL slike kojom ćete predstavljati"
              />
            </div>
            <div class="form-group">
              <input
                v-model="naziv"
                type="naziv"
                class="form-control"
                id="naziv"
                placeholder="Naziv po kojem ćete prepoznati plan"
              />
            </div>
            <div class="form-group">
              <input
                v-model="tekst"
                type="tekst"
                class="form-control"
                id="tekst"
                placeholder="Kratki opis pretplate"
              />
            </div>
            <div class="form-group">
              <input
                v-model="price"
                type="price"
                class="form-control"
                id="price"
                placeholder="ID cijene u Stripu, npr. price_1IAe2sB4jY1Sj3hiGgaywwAH"
                readonly
              />
            </div>
            <div class="form-group">
              <input
                v-model="id_plan"
                type="id_plana"
                class="form-control"
                id="id_plana"
                placeholder="ID plana - mora biti jedinstven i numerički"
              />
            </div>
            <b-button class="mr-1" @click="editSub"> SAVE </b-button>
            <b-button class="mr-1" variant="danger" @click="cancelEdit">
              Cancel
            </b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import admin_navi from "@/components/admin_navi.vue";
import { db } from "@/firebase";
import store from "@/store";

export default {
  name: "EditSubs",
  components: {
    adminNavi: admin_navi,
  },
  data: function () {
    return {
      suma: "",
      slika: "",
      naziv: "",
      tekst: "",
      price: "",
      id_plan: "",
    };
  },
  mounted() {
    this.getSubs();
  },
  methods: {
    getSubs() {
      if (store.subsType === null) {
        alert("Nije odabran niti jedan plan pretplate!");
      } else {
        db.collection("sub_types")
          .doc(store.subsType)
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
              const data = doc.data();
              this.suma = data.suma;
              this.slika = data.slika;
              this.naziv = data.naziv;
              this.tekst = data.tekst;
              this.price = data.price;
              this.id_plan = data.planID;
              console.log("samo suma", this.suma);
              console.log("samo price", this.price);
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }
    },
    editSub() {
      if (
        this.suma === "" ||
        this.slika === "" ||
        this.naziv === "" ||
        this.tekst === "" ||
        this.price === "" ||
        this.id_plan === ""
      ) {
        alert("Sva polja moraju biti popunjena");
      } else {
        db.collection("sub_types")
          .doc(store.subsType)
          .set({
            suma: this.suma,
            slika: this.slika,
            naziv: this.naziv,
            tekst: this.tekst,
            price: this.price,
            planID: this.id_plan, //zapravo redundantno jer kao ID koristimo price
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .then(() => {
            alert("Uspješno spremljene promjene!");
            this.$router.replace({ name: "Subscription_admin" });
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    },
    cancelEdit(){
      alert("Odustali ste od promjena!");
      this.$router.replace({ name: "Subscription_admin" });
    }
  },
};
</script>
