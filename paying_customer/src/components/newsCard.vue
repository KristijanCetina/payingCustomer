<template>
<div>     
    <b-col>
      <b-card
    :title="name"    
    tag="news"
    class="mb-3 kartica"
    :header="date"
    header-class="header"
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
  props: ["name", "tekst", "date"]
}
</script>


<style scoped>
.kartica{
    max-width: 680px; 
    width: auto;
    margin-left: 6%; 
    border-color: #384F7B; 
    color: #384F7B;
}
.header{
  margin-bottom: -14px;
  text-align: right;
  line-height: 2px;
  background: linear-gradient(0.25turn, #384F7B, #8c9cb9, #384F7B);
  color: #ffffff;
}
</style>