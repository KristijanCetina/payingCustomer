<template>
  <div>
    <br />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <authNavi />
        </div>
        <div class="col-md-9">
          <div class="limit">
            <img
              src="./../assets/schedule.png"
              fluid
              alt="Responsive image"
              style="max-width: 100%; height: auto"
            />
          </div>
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

<style scoped>
.limit {
  position: absolute;
  width: 80%;
  height: 70%;
}
@media (max-width: 750px) {
  .limit {
    top: 190px;
    right: auto;
    width: auto;
    height: auto;
  }
}
</style>
