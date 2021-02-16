<template>
    <div class="container">
  <div class="row pt-2 pb-2">
    <div class="col-1 ">
      <p class="text-left"> id</p>
    </div>
    <div class="col-3 ">
      <p class="text-left"> name</p>
    </div>
    <div class="col-3 ">
      <p class="text-left"> email</p>
    </div>
        <div class="col-3 ">
      <p class="text-left"> subscription</p>
    </div>
        <div class="col-2 ">
      <p class="text-left"> time</p>
    </div>
  </div>
</div>  
</template>

<script>
export default {
    name: "subs_info",
    props: {
        msg: String
    }
};
</script>

//to be used for generating lists of users or subscriptions