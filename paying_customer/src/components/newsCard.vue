<template>
<div>     
    <b-col>
      <b-card
    :title="name"
    tag="news"
    class="mb-3 kartica"
  >
        <b-text-card 
        v-text="tekst"
        >
            </b-text-card>
      </b-card>
    </b-col>
    </div>
</template>


<script>
export default {
  props: ["name", "tekst"]
}
</script>


<style scoped>
.kartica{
    max-width: 100%; 
    width: 650px; 
    margin-left: 6%; 
    border-color: #384F7B; 
    color: #384F7B;
}
</style>