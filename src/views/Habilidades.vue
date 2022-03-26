<template>
    <section class="habilidades" >
        <div id="abilities">
            <h1>Habilidades</h1>
        </div>

        <div id="langsandframes">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png" alt="">
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Laravel-four-icon.png/640px-Laravel-four-icon.png" alt="">
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png" alt="">
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Habilidades",
    data() {
        return {}
    }
}
</script>

<style scoped>
.habilidades {
    background: #171717;
    height: 600px;
}

#abilities {
    padding: 60px 0;
}

#abilities h1 {
    font-size: 2.4rem;
    padding: 45px;
}

#langsandframes {
    display: flex;
    margin: 100px 100px;
}

#langsandframes img{
    max-width: 35%;
}
</style>