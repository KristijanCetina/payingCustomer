<template>
  <div>
    <br />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <authNavi />
        </div>
        <div class="col-md-9">
          Tu će doći pregled uplata!
        </div>
      </div>
      <br /><br /><br />
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
