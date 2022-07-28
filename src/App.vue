<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HomePage />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HomePage from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
* {
    outline: 0;
    margin: 0;
    border: 0;
    padding: 0;
    scroll-behavior: smooth;
}

body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

/* body {
  background-color: #6610b1;
}
 */
.container {
  padding:0 45px 0 45px;
  max-width: 1200px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*   text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
