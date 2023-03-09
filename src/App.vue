<template>
  <div id="App">
    <playtime></playtime>
  </div>
</template>

<script>
import playtime from "@/components/playtime.vue";
import 'element-plus/dist/index.css'
import axios from 'axios';
export default {
  name: 'App',
  provide(){
    return{
      $axios:axios.create({
        baseURL:'http://localhost:996',
        timeout:5000,
      })
    }
  },
  components: {
    playtime
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
