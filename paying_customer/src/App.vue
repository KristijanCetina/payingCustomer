<template>
  <div>
    <navibar></navibar>
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <router-view /><br />
  </div>
</template>


<script>
import Navibar from "@/components/Navibar.vue";

export default {
  name: "Navibar",
  components: {
    navibar: Navibar,
  },
};
</script>

<style lang="scss">
body {
  background-color: #f5f5f5;
}
</style>



