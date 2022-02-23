<template>
  <Home/>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
*{
  overflow: hidden;
  scroll-behavior: smooth;
}
body {
  background-color: #0f0f1e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#e4e4e4;
}
</style>
