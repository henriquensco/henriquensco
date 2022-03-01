<template>
  <div class="about">
    <h1>Um poquinho sobre mim...</h1>
    <div id="about-me">
      <div>
        <p>
          Quando criança o meu sonho era ser médico (idéia colocada na minha
          cabeça por meus pais), mas quando comecei a frequentar a creche, em
          certo comecei a ter aulas de computação para crianças, e confesso que
          me apaixonei por aquilo, mesmo não sabendo e não tendo condições de
          ter uma máquina em casa.
        </p>
        <p>
          Houve um tempo em que fui morar com minha avó. Na época meu primo
          tinha uma LanHouse e decidiu me ensinar a usar o computador. Depois de
          um tempo me deparei tentando aprender a como fazer jogos, vi um pouco
          de HTML, CSS e arrisquei a criar umas páginas. Ainda parecia bem
          dificil por não entender muito bem e não saber como pesquisar.
        </p>
        <p>
          Hoje, depois de muitos altos e baixos, mesmo sendo bem jovem, consegui
          a oportunidade que eu queria. Acredito que todo esforço, independente
          da situação que você se encontra vai te levar ao lugar que você queira
          estar. É por isso que sempre busco aprender e melhorar na minha
          carreira, pois me vejo em um nível mais além.
        </p>
      </div>
      <div>
        <span>Saiba onde me encontrar</span>
        <ul id="networks">
          <li><a href="https://www.linkedin.com/in/henrique-nascimento-costa-2a1332157/" target="_blank" rel="Linkedin"></a></li>
          <li><a href="https://github.com/henriquensco" target="_blank" rel="GitHub"></a></li>
          <li><a href="mailto:henriquensco@gmail.com" target="_blank" rel="Email"></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
};
</script>

<style scoped>
.about {
  display: grid;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
}
h1,
h3,
h4 {
  text-shadow: rgba(255, 255, 255, 0.7) 0 0px 4px;
}
#about-me {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-top: 5%;
}
@media(max-width: 880px) {
  #about-me {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 15%;
  }
  #about-me div:nth-child(2){
    margin-top: 25px;
  }
}
#about-me div:first-child {
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 15px 15px;
}
#about-me div:nth-child(2) {
  font-size: 35px; 
}
#about-me #networks li{
  display: inline-block;
  margin: 0 30px 25px 0;
}
#about-me #networks li:first-child a{
  background-image: url("~@/assets/linkedin.svg");
      background-repeat: no-repeat;
    background-size: 40px 81px;
    cursor: pointer;
    padding: 20px;
}
#about-me #networks li:nth-child(2) a {
  background-image: url("~@/assets/github.svg");
     background-repeat: no-repeat;
    background-size: 40px 81px;
    cursor: pointer;
    padding: 20px;
}
#about-me #networks li:nth-child(3) a{
  background-image: url("~@/assets/email-address.svg");
      background-repeat: no-repeat;
    background-size: 40px 81px;
    cursor: pointer;
    padding: 20px;
}
</style>
