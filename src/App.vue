<template>
  <HeaderComponent />
  <Home />
  <Habilidades/>
  <Experiencias/>
  <Projetos/>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Home from "@/views/Home.vue";
import Habilidades from "@/views/Habilidades.vue";
import Experiencias from "@/views/Experiencias.vue";
import Projetos from "@/views/Projetos.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    Home,
    Habilidades,
    Experiencias,
    Projetos
  },
};
</script>

<style>
* {
  outline: 0;
    margin: 0;
    border: 0;
    padding: 0;
    scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e4e4e4;
}
</style>
