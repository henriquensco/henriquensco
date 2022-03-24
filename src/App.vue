<template>
  <HeaderComponent />
  <Home />
  <Habilidades/>
  <Experiencias/>
  <Projetos/>
  <Sobre/>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import Home from "@/views/Home.vue";
import Habilidades from "@/views/Habilidades.vue";
import Experiencias from "@/views/Experiencias.vue";
import Projetos from "@/views/Projetos.vue";
import Sobre from "@/views/Sobre.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    Home,
    Habilidades,
    Experiencias,
    Projetos,
    Sobre
  },
  created() {
    document.title = "Henrique Nascimento Costa"
  }
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

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #414141;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e4e4e4;
}
</style>
