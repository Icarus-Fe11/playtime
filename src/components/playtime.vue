<template>
  <el-header></el-header>
  <el-main>
    <div>
      <el-row>
        <el-col :span="8"><div>{{ displayTime }}</div></el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
export default {
  name: "PlayTime",
  data(){
    return{
      elapsedTime:0
    }
  },
  computed:{

  }
}
</script>

<style scoped>

</style>