<template>

    <header id="navbar">
        <div class="container">
            <div class="flex-container">
                <div>
                    Henrique
                </div>
                <div>
                    <!-- ok!2 -->
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="about-section content">
            <div class="align-center">
                <div id="about-me">
                    <div>
                        <h1>Hey, I'm Henrique</h1>
                    </div>
                    <div @click="aboutMe()" id="click-about-me">
                        <span>Sobre Mim</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="container content" id="about">
            <div class="flex-container">
                <div>
                    ok!1
                </div>
                <div>
                    ok!2
                </div>
            </div>
        </section>
    </main>

</template>

<script>
export default {
    name: "HomePage",
    data() {
        return {
            style: {}
        }
    },
    methods: {
        aboutMe() {
            window.location.href = "#about";
        }
    }
}
</script>

<style scoped>
header {
    background-color: #333;
    color: #fff;
    padding: 23px 5px;
    position: fixed;
    width: 100%;
    top: 0;
    overflow: hidden;
}

.about-section {
    background-color: black;
}

.flex-container {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    max-width: 1200px;
    margin: 0 auto;
}

.content {
    width: 100%;
    height: 100vh;
}

.align-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

#about-me {
    color: #fff;
    margin-top: calc(40vh - 5%);
    justify-content: center;
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

#about-me div {
    margin: 25px;
}

#about-me h1 {
    font-size: 4rem;
}

#click-about-me {
    border: 1px solid #fff;
    padding: 17px;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    width: 170px;
}

#click-about-me:active {
    background-color: #161616;
    border: 2px solid #fff;
}
</style>