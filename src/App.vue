<template>
<div>
  <navbar />
  <div class="app">
    <router-view/>    
  </div>
</div>
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue"

export default {
  components: {
    Navbar
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>
