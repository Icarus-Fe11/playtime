<template>
  <el-header>123</el-header>
  <el-main>
    <div>
      <el-row>
        <el-col :span="8" :offset="4"><div>{{ elapsedTime }}</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="4">{{status}}</el-col>
      </el-row>
      <el-row>
        <el-col><el-button @click="changeStatus">按钮</el-button></el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>

export default {
  name: "PlayTime",
  inject:['$axios'],
  data(){
    return{
      elapsedTime:10000,
      status:"off",
    }
  },


  methods:{
    getStatus(){
        this.$axios.post('').then(response=>{
          this.elapsedTime=response.data.elapsedTime;
          this.status=response.data.status;
        })
      },
    changeStatus(){
      if(this.status=="off") this.status="on"
        else this.status="off"
    }
    },



  computed:{

  },


  mounted() {
      this.interval=setInterval(()=>{
        this.elapsedTime--;
      },1000);
  }
}
</script>

<style scoped>

</style>