<template>
  <div style="padding-left: 35px">
    <b-card
      style="width: 200px; height: 345px"
      body-class="text-center"
      :title="suma"
      :img-src="require(`@/assets/Plans/${slika}`)"
      :img-alt="naziv"
      img-top
    >
      <!-- ako budemo htjeli dodavati za nekakv bolji izgled kartice -->
      <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" img-top></b-card-img> -->
      <b-card-text v-text="tekst"> Za sve koji žele isporbati </b-card-text>

      <b-button
        v-on:click="submit(price)"
        style="background-color: #384f7b; border-color: #384f7b; bottom: 20px"
        block
        pill
        bottom
        >Choose plan</b-button
      >
    </b-card>
  </div>
</template>


<script>
import store from "@/store";

export default {
  props: ["suma", "slika", "naziv", "tekst", "price"],
  methods: {
    submit(message) {
      store.subsType = message;
      this.$router.replace({ name: "Signup" });
      console.log(store.subsType);
    },
  },
};
</script>



