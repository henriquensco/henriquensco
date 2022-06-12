<template>
    <main>
        <NavbarComponent />

        <div class="content">
            <section id="home">
                <div id="presentation">
                    <h1>Olá, tudo bem?</h1>
                    <h2>Eu me Chamo Henrique</h2>
                    <h3>Conheça sobre mim aqui!</h3>
                </div>
                <div>
                    <img src="@/assets/e-3d-boy-sitting-with-laptop-and-cup.svg" alt="" />
                </div>
            </section>

            <section id="about">
                <div>
                    <div>
                        <h1 id="section-title">Um Pouco Sobre Mim</h1>
                    </div>
                    <div class="box">
                        <p>
                            Em descrição breve, me chamo Henrique, e sou Desenvolvedor FullStack.
                            Desde jovem sempre fui bastante apaixonado por tecnologia, descobrir como as coisas
                            funcionam e construir coisas úteis. Foi aí que percebi que percebi que programação seria o
                            caminho que eu deveria trilhar, tudo isso aos 14 anos.
                        </p>
                        <p>
                            De família bastante humilde, sem recursos suficientes para comprar um computador para
                            estudar, sempre utilizada os computadores de LanHouse até conseguir comprar um notebook que
                            conseguia atender as necessidades.
                        </p>
                        <p>
                            Aos 19 anos, durante a pandemia, resolvi sair da casa do meus pais para buscar a minha
                            primeira vaga como programador, mudei para um estado onde não conhecia ninguém, cultura e
                            forma de falar totalmente diferente da minha. E foi a decisão que tomei!
                        </p>
                        <p>
                            Depois de 6 meses de muito estudo e trabalhando em projetos, consegui a oportunidade de ser
                            Desenvolvedor na DPC Distribuidor Atacadista. E nesse período de estudo e trabalho, longe da
                            minha família, foi o que eu mais aprendi sobre mim, minha carreira e o que quero no futuro.
                        </p>
                    </div>
                </div>
            </section>

            <section id="experiences">
                <div>
                    <div>
                        <h1 id="section-title">Minhas Experiências</h1>
                    </div>
                    <div id="works">
                        <div id="work">
                            <div id="title">Freelancer - SprayTech</div>
                            <div id="description">
                                <p>Desenvolvedor PHP/Laravel no projeto de aplicativo SprayTech.</p>
                                <p>SprayTech é um
                                    aplicativo que auxilia na inspeção adequada de equipamentos agrônomos e que
                                    levou 1º lugar no desafio beOn Claro, da Hackagro.</p>
                            </div>
                        </div>
                        <div id="work">
                            <div id="title">Desenvolvedor FullStack - DPC Distribuidor</div>
                            <div id="description">
                                <p>Hoje estou atuando como Desenvolvedor FullStack na DPC Distribuidor Atacadista.</p>
                                <p>Ultimamente tenho trabalhado e implementação de novas features e manutenção dos
                                    sistemas web da empresa.</p>
                                <p>As stacks que são adotadas pela empresa e que também ultilizo no cotidiano:
                                    PHP/Laravel, Javascript, VueJs e ReactJs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- <section id="projects"></section> -->

            <section id="contact">
                <div>
                    <h1 id="section-title">Contato</h1>
                </div>
                <div id="social">
                    <div>
                        <span>Email: <a href="mailto:henriquensco@gmail.com">henriquensco@gmail.com</a></span>
                    </div>
                    <div>
                        <span>Linkedin: <a href="https://www.linkedin.com/in/henriquensco/" target="_blank">Henrique Nascimento Costa</a></span>
                    </div>
                </div>
            </section>
        </div>

        <FooterComponent />

        <div id="top" v-on:click="top">
            Top!
        </div>
    </main>
</template>


<script setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const top = () => {
    window.scrollTo(0, 0);
};
</script>

<style scoped>
.content {
    margin: 0 auto;
    max-width: 1280px;
}

section {
    height: calc(100vh - 45px);
}

#home {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#about {
    display: flex;
    justify-content: center;
    color: #FFF;
}

#experiences {
    display: flex;
    justify-content: center;
    color: #FFF;
}

#contact {
    color: #FFF;
    flex-wrap: wrap;
}

#contact #social {
    text-align: center;
    margin-top: 4%;
}

#contact #social a {
    color: #dbdbdb;
}


#home img {
    float: right;
    width: 45%;
}

#presentation {
    color: #FFF;
}

#presentation h1 {
    font-size: 3rem;
}

#presentation h2 {
    font-size: 2rem;
}


#about .box {
    padding: 22px 40px;
    border-radius: 11px;
    background-color: rgb(7 7 7 / 32%);
    text-align: justify;
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgb(30 30 30 / 30%);
    margin-top: 5%;
}

#about .box p {
    margin: 15px 0;
}


#section-title {
    text-align: center;
    font-size: 2rem;
}
#experiences #works {
    display: flex;
    justify-content: space-around;
    margin-top: 5%;
}

#experiences #works #work {
    width: calc(40px + 30vw);
    padding: 12px 19px;
    border: 1px solid #fff;
    border-radius: 4px;
    margin: 0 50px;
}

#experiences #works #work #title {
    font-size: 1.1rem;
    text-align: center;
    border-bottom: 2px solid #2c2c2c;
}

#experiences #works #work #description {
    text-align: justify;
    margin-top: 15px;
}

#top {
    width: 54px;
    height: 55px;
    border-radius: 50%;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    float: right;
    bottom: 3%;
    right: 1%;
    cursor: pointer;
}
</style>