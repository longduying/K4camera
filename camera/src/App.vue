<template>
  <div id="app">
    <div id="Cnav">
      <mya></mya>
      <finance></finance>
    </div>

    <router-view/>
  </div>
</template>
<script>
  import Cindex from './views/C-index';
  import Cfinance from './views/C-finance'
  export  default {
    components:{
      'mya': Cindex ,
      'finance':Cfinance
    },
    data() {
      return {
      }
    }
  }
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #Cnav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
