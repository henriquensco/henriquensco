<template>
  <div class="experiences">
    <h1>Minhas Experiências</h1>

    <div id="experience">
      <div id="image">
        <img
          src="@/assets/dpc.png"
          alt="Django"
          srcset="@/assets/dpc.png"
        />
      </div>
      <div id="title">DPC Distribuidor Atacadista</div>
      <div id="job">Desenvolvedor Fullstack</div>
      <div id="description">
        Desenvolvimento e manutenção de novas features fazendo a utilização de tecnologias adotadas pela
        empresa. Utilizando PHP, Laravel, JavaScript, VueJs.
      </div>
    </div>

    <div id="experience">
      <div id="image">
        <img src="@/assets/senai-logo.png" alt="Django" srcset="@/assets/senai-logo.png" />
      </div>
      <div>
        <div id="title">Senai</div>
        <div id="job">Desenvolvimento de Sistemas</div>
        <div id="description" style="text-align:center">
          Cursando o terceiro período do curso Técnico em Desenvolvimento de Sistemas do Senai SC.
          Nesse período já foi abordado lógica de programação, algoritimos e banco de dados.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Experiences",
  components: {},
};
</script>

<style scoped>
.experiences {
  display: grid;
  justify-content: space-around;
}
h1,
h3,
h4 {
  text-shadow: rgba(255, 255, 255, 0.7) 0 0px 4px;
}
#image {
  grid-area: logo;
}
#title {
  grid-area: titulo;
  font-weight: 800;
}
#job {
  grid-area: job;
  font-weight: bold;
}
#description {
  grid-area: description;
}
#experience {
  display: grid;
  grid-template-areas:
    "logo titulo titulo titulo titulo"
    "logo job job job job"
    "logo description description description description ";
  column-gap: 12px;
  background-color: #ffffff;
  color: #0f0f1e;
  padding: 5px 5px;
  border-radius: 4px;
  width: 80%;
  margin: 15px auto;
  align-items: center;
  justify-content:space-between;
  text-align: center;
}
#experience img {
  width: 80px;
}

@media(max-width: 420px) {
  #experience img {
  width: 50px;
}
}
</style>
