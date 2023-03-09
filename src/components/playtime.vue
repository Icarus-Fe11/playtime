<template>
  <el-header>123</el-header>
  <el-main>
    <div>
      <el-row>
        <el-col :span="8" :offset="4"><div v-bind:style="color">{{ myminutes }}:{{myseconds}}</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8" :offset="4">{{status}}{{elapsedTime}}</el-col>
      </el-row>
      <el-row>
        <el-col><el-switch @change="changeStatus" v-model="status">按钮</el-switch></el-col>
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
      elapsedTime:1000000,
      status:"off",
      color:"color:red",
      interval:null,
    }
  },


  methods:{
        getStatus(){
            this.$axios.post('/getinfo').then(response=>{
              console.log(response.data.millisecond);
              this.elapsedTime=response.data.millisecond;
              this.status=response.data.flag;
            })
            if(this.status=="on"){
              this.interval=setInterval(()=>{
                this.elapsedTime-=1000;
              },1000);
            }
          },
        changeStatus(){
          if(this.status=="off") {
            this.$axios.post("changeswitch",{
              flag: "on",
            }).then(response => {
              if (response.data.success == 200) {
                this.status = "on";
                this.interval = setInterval(() => {
                  this.elapsedTime -= 1000;
                }, 1000);
              }
            })
          }
          else{
            this.$axios.post("changeswitch",{
              flag:"off",
            }).then(response=>{
              if(response.data.success==200){
                this.status="off";
                clearInterval(this.interval);
              }
            })
          }
        }
  },



  computed:{
      myminutes(){
        return Math.floor((this.elapsedTime%3600000)/60000);
      },
      myseconds(){
        return Math.floor((this.elapsedTime%60000)/1000);
      }
  },


  beforeMount() {
    this.getStatus()
  }
}
</script>

<style scoped>

</style>