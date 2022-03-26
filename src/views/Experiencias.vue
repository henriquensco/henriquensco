<template>
    <section class="experiencias" >
        <div id="experiences">
            <h1>Experiências</h1>

            <div id="experience">
                <div id="image"><img src="@/assets/dpc.png" alt=""></div>
                <div id="right">
                    <div id="company"><h2>DPC Distribuidor Atacadista</h2></div>
                <div id="occupation"><h3>Desenvolvedor FullStack</h3></div>
                <div id="description"><p>Desenvolvimento e manutenção de novas features fazendo a utilização de tecnologias adotadas pela empresa. Utilizando PHP, Laravel, JavaScript, VueJs.</p></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Experiencias",
    data() {
        return {}
    }
}
</script>

<style scoped>
.experiencias {
    background: #171717;
    height: 600px;
}

#experiences {
    padding: 60px 0;
}

#experiences h1 {
    font-size: 2.4rem;
    padding: 45px;
}

#experience {
    display: grid;
    grid-template-areas:
        "image company company company company"
        "image occupation occupation occupation occupation"
        "image description description description description";
    column-gap: 12px;
    background-color: #fff;
    color: #0f0f1e;
    padding: 5px 5px;
    border-radius: 4px;
    margin: 15px auto;
    width: 60%;
    justify-content: unset;
    text-align: revert;
}

@media(max-width:630px) {
    #experience {
        display: block;
    }
}

#image {
    grid-area: image;
}
#company {
    grid-area: company;
}
#occupation {
    grid-area: occupation;
}
#description {
    grid-area: description;
}

#right div{
    padding: 5px 0;
}
</style>