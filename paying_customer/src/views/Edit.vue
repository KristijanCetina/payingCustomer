<template>
  <div>
    <br />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <authNavi />
        </div>
      </div>
      <br /><br /><br />
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <p>
            tote možemo staviti reset lozinke
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authorized_navi from "@/components/authorized_navi.vue";

export default {
  name: "Subscription",
  components: {
    authNavi: authorized_navi,
  },
};
</script>
