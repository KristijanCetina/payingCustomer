<template>
  <div style="padding-left: 35px">
    <b-card
      style="width: 200px; height: 345px"
      body-class="text-center"
      :title="suma"
      :img-src="slika"
      :img-alt="naziv"
      img-top
    >
      <!-- ako budemo htjeli dodavati za nekakv bolji izgled kartice -->
      <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" img-top></b-card-img> -->
      <b-card-text v-text="tekst"> </b-card-text>

      <b-button
        v-if="userIsAdmin === false"
        v-on:click="submit(price)"
        style="background-color: #384f7b; border-color: #384f7b; bottom: 20px"
        block
        pill
        bottom
        >Choose plan</b-button
      >
      <!-- otkrij kako otvoriti samo jedan modal i editirati podatke -->
      
        <b-button v-if="userIsAdmin === true" @click="$bvModal.show('modalEdit')"
          >Edit</b-button
        >
        <b-modal id = 'modalEdit'>
          <template #modal-header="{}">
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
                  type="id_plan"
                  class="form-control"
                  id="id_plan"
                  placeholder="ID plana - mora biti jedinstven i numerički"
                />
              </div>
            </form>
          </template>

          <template #modal-footer="{ cancel }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button size="sm" variant="success" @click.prevent="editSub">
              SAVE
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
              Cancel
            </b-button>
          </template>
        </b-modal>

    </b-card>
  </div>
</template>


<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  data: function () {
    return {
      userIsAdmin: store.userIsAdmin,
      modalID: store.modalID,
    };
  },
  props: ["suma", "slika", "naziv", "tekst", "price", "id_plan"],
  methods: {
    submit(message) {
      store.subsType = message;
      this.$router.replace({ name: "Signup" });
      console.log(store.subsType);
    },
    editSub() {
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
  },
};
</script>



