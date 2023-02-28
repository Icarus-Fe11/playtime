<template>
  <div id="App">
    <playtime></playtime>
  </div>
</template>

<script>
import playtime from "@/components/playtime.vue";
import 'element-plus/dist/index.css'
export default {
  name: 'App',
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
