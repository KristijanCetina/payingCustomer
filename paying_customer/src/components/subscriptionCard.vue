<template>
<div style="padding-right: 40px" >
    <b-card  
      style="width: 200px; height: 345px"
      body-class="text-center"
      :title="cijena"
      :img-src="require(`@/assets/Plans/${slika}`)"
      :img-alt="naziv"
      img-top
    >
    <!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" img-top></b-card-img> -->
      <b-card-text v-text="tekst">
        Za sve koji žele isporbati
      </b-card-text>
      <b-button
       to=""
       style="background-color:  #384F7B; border-color: #384F7B; bottom: 20px;"
       block
       pill
       bottom
       >Choose plan</b-button>
    </b-card>
    </div>
</template>

<script>
export default {
  props: ["cijena","slika","naziv","tekst"],
}
</script>