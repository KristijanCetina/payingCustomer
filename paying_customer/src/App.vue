<template>
  <div style="background-color: #ffffff"> 
    
      <navibar></navibar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
        <router-view/><br>
  </div>
</template>


<script>
import Navibar from '@/components/Navibar.vue';

export default {
  name: 'Navibar',
  components:{
    'navibar': Navibar
  }
}
</script>




