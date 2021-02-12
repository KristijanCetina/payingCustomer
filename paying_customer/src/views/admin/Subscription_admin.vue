<template>
    <div class="container-fluid">
      <div class="row">
         <adminNavi />
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <p>Tu bi trebalo doci pregled vrsta pretplata...</p>
        </div>
      </div>
    </div>
</template>

<script>
import admin_navi from "@/components/admin_navi.vue";


export default {
  name: "SubsriptionAdmin",
  components: {
    adminNavi: admin_navi,
	},
};
</script>
