<template>
    <div class="container-fluid">
      <div class="row">
        <authNavi/>
        <div class="col-md-3"></div>
        <div class="col-md-9">
          Tu će doći pregled uplata!
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
