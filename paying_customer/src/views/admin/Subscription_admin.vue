<template>
  <div class="container-fluid">
    <div class="row">
      <adminNavi />
      <div class="col-md-3"></div>
      <div class="col-md-9">
        <h3>Ovdje možete stvoriti nove pretplate</h3>
        <template>
          <b-button @click="$bvModal.show('modal')"
            >Stvori novu pretplatu</b-button
          >

          <b-modal id="modal">
            <template #modal-header="{}">
              <!-- Emulate built in modal header close button action -->
              <h5>Unesite podatke!</h5>
            </template>

            <template #default="{}">
              <form>
                <div class="form-group">
                  <input
                    v-model="suma"
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
              </form>
            </template>

            <template #modal-footer="{ cancel }">
              <!-- Emulate built in modal footer ok and cancel button actions -->
              <b-button size="sm" variant="success" @click.prevent="postNewSub">
                SAVE
              </b-button>
              <b-button size="sm" variant="danger" @click="cancel()">
                Cancel
              </b-button>
            </template>
          </b-modal>
        </template>
        <div class="subAdmin">
          <h3>Pregled tipova pretplata:</h3>
          <div class="table-responsive" >
          <table class="table-hover">
            <thead>
              <tr>
                <th scope="col"> ID</th>
                <th scope="col">Iznos</th>
                <th scope="col">Ime</th>
                <th scope="col">Opis</th>
                <th scope="col">Slika</th>
                <th scope="col">Id cijene</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="subList in subList" :key="subList.id_plan">
                <td>{{ subList.id_plan }}</td>
                <td>{{ subList.suma }}</td>
                <td>{{ subList.naziv }}</td>
                <td>{{ subList.tekst }}</td>
                <td>{{ subList.slika }}</td>
                <td>{{ subList.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import admin_navi from "@/components/admin_navi.vue";
import { db } from "@/firebase";

export default {
  name: "SubsriptionAdmin",
  data: function () {
    return {
      suma: "",
      slika: "",
      naziv: "",
      tekst: "",
      price: "",
      id_plan: "",
      subList: [],
    };
  },
  components: {
    adminNavi: admin_navi,
  },
    mounted() {
    this.getSubs()
  },
  methods: {
    postNewSub() {
      //ne znam je li postoji elegantniji nacin da ih sve verificiram :(
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
          .add({
            suma: this.suma,
            slika: this.slika,
            naziv: this.naziv,
            tekst: this.tekst,
            price: this.price,
            planID: this.id_plan, //zapravo koristimo za definiranje redosljeda na options page
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .then(() => {
            this.$bvModal.hide("modal");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    },
    getSubs() {
      db.collection("sub_types")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            const data = doc.data();
            this.subList.push({
              suma: data.suma,
              slika: data.slika,
              naziv: data.naziv,
              tekst: data.tekst,
              price: data.price,
              id_plan: data.planID,
            })
            console.log(this.subList);
          });
        });
    },
  },
};
</script>

//koristila za modal https://bootstrap-vue.org/docs/components/modal
//treba tu tablicu malo uljepšati :) https://getbootstrap.com/docs/4.1/content/tables/


<style lang="scss" scoped>
.subAdmin {
  padding-top: 50px;
  padding-bottom: 30px;
}
</style>