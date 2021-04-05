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
      
        <b-button 
        v-if="userIsAdmin === true" 
        v-on:click="editSub(price)"
        style="background-color: #384f7b; border-color: #384f7b; bottom: 20px"
        block
        pill
        bottom
         >Edit</b-button
        >
    </b-card>
  </div>
</template>


<script>
import store from "@/store";

export default {
  data: function () {
    return {
      userIsAdmin: store.userIsAdmin,
    };
  },
  props: ["suma", "slika", "naziv", "tekst", "price", "id_plan"],
  methods: {
    submit(message) {
      store.subsType = message;
      this.$router.replace({ name: "Signup" });
      console.log(store.subsType);
    },
    editSub(message) {
      store.subsType = message;
      this.$router.replace({ name: "Edit_Subs" });
    },
  },
};
</script>



