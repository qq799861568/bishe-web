<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from'./components/Tabbar'
export default {
  name: 'App',
  created:function(){
    this.$router.push('/')
  },
  components:{
    Tabbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
