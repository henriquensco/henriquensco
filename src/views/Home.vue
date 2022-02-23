<template>
  <div class="Home">
    <HeaderComponent/>
    <div id="home">
      home
    </div>
    <div id="about" style="margin:700px">
      about
    </div>
    <div id="experiences" style="margin:700px">
      experiences
    </div>
    <div id="projects" style="margin:700px">
      projects
    </div>
    <div id="contact" style="margin:700px">
      contact
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent';

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    HeaderComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
