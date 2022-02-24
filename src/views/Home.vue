<template>
  <div class="home">
    <div id="svg"></div>
    <h1>Henrique Nascimento Costa</h1>
    <h3>Seja bem vindo!</h3>
    <h4>Venha conhecer um pouco mais sobre mim.</h4>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.home {
  display: grid;
  justify-content: center;
}
#svg {
  background-image: url("~@/assets/e-3d-boy-sitting-with-laptop-and-cup.svg");
  background-repeat: no-repeat;
  background-size: 127% 90%;
  padding: 160px;
}
h1, h3, h4 {
  text-shadow: rgba(255, 255, 255, 0.7) 0 0px 4px;
}
</style>
