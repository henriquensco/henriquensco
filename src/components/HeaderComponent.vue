<template>
  <header>
    <div id="content">
      <div id="logo">
        <h4>Henrique's</h4>
      </div>
      <div id="menu">
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#abilities">Habilidades</a></li>
        <li><a href="#experiences">Experiências</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#about">Sobre</a></li>
      </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
/* header {
  background-color: #21314e;
  border-bottom: 1px solid #15243e;
  padding: 25px;
} */

#content {
  display: flex;
  justify-content: space-around;
  background-color: #21314e;
  border-bottom: 1px solid #15243e;
  padding: 25px;
  position: fixed;
  top: 0;
  width: 100%;
}

#menu ul {
  display: flex;
  list-style: none;
  justify-content: center;
}

#menu ul li a{
  padding: 5px 5px;
  color: #d6d6d6;
  font-weight: bold;
  text-decoration: none;
}
</style>
