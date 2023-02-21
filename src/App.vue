<template>
  <playtime/>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
import 'element-plus/dist/index.css'
import playtime from "@/components/playtime.vue";
export default {
  name: 'App',
  components: {
    /*HelloWorld*/
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
  margin-top: 60px;
}
</style>
