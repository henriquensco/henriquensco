<template>
  <section class="sobre">
    <div id="about">
      <h1>Sobre</h1>

      <div id="description">
        <p>
          Como já mostrato em toda a página, me chamo Henrique. E aqui é uma
          breve descrição sobre mim. : )
        </p>
        <p>
          Desde os 10 anos de idade sou apaixonado por tecnologia, sempre
          busquei aprender um pouco de programação, como funcionava os sites e
          sempre fracassava por não ter alguém pra me guiar : (, mas sempre
          determinado sobre o que eu queria fazer.
        </p>
        <p>
          Comecei a trabalhar aos 12 anos, ajudando o meu Pai, sempre almejando
          conseguir um notebook, pois não tinhamos condições a época. Aos 14
          consegui comprar um que me ajudou um pouco na minha jornada.
        </p>
        <p>
          Aos 19 anos sai do interior do Maranhão para Santa Catarina, só com um
          mochilão e sem saber onde ia dormir, mas determinado que em menos de 1
          ano iria conseguir minha vaga de Desenvolvedor. E consegui!
        </p>
        <p>
          Hoje estou curtindo minha vida na área que desde minha infância sonho
          em trabalhar e que muitos disseram que eu nunca iria conseguir. Sou
          grato à empresa que me deu a oportunidade e aos meus bons amigos
          (também desenvolvedores) que me ajudaram nessa minha jornada.
        </p>
      </div>

      <div id="findme">
          <ul>
              <li><a href="http://" target="_blank" rel="noopener noreferrer"></a></li>
          </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Sobre",
  data() {
    return {};
  },
};
</script>

<style scoped>
.sobre {
  background: #171717;
  height: 100%;
}

#about {
  width: 77%;
  margin: 0 auto;
  padding: 40px 0;
  padding: 80px 0 105px;
}

#about h1 {
  font-size: 2.4rem;
  padding: 20px;
}

#about #description {
    background-color: rgba(255, 255, 255, 0.741);
    color: #171717;
    font-size: 1rem;
    padding: 10px 10px;
    border-radius: 4px;
    margin: 40px 0 0 0;
}
#about #description p {
    padding: 5px 0;
}
</style>
