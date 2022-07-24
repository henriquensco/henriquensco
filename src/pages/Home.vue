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
        <section class="header-about-section content">
            <div class="align-center">
                <div id="about-me">
                    <div>
                        <h1>Hey, I'm Henrique</h1>
                    </div>
                    <div @click="aboutMe()" id="click-about-me">
                        <span>About Me</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="content about-section" id="about">
            <div class="container flex-container">
                <div class="inner-content">
                    <div id="title">
                        <h2>A little bit about me...</h2>
                    </div>
                    <div id="content">
                        <p>
                            Hey, there! My name is Henrique Nascimento and I'm a FullStack Developer, currently working
                            with PHP, but in my skills are included Python, JavaScript, VueJS and Laravel.
                        </p>
                        <p>
                            In my childhood I fallen in love about technology and programming. So, with a few resources
                            that I had in the past, I decided to learn about programming on my own, going to CyberCafe
                            once or a twice in the week.
                        </p>
                        <p>
                            In the period a learn a few things, I couldint learn more becouse I had to go to the school
                            and work to help my family.
                        </p>
                        <p>
                            January of the 2021 I left my home, my family and friend to go to another State o Brazil to
                            try find my first oportunity as a Web Developer in some Company.
                            About six months later of studying and aplying to jobs oportunity, I got my first job in the
                            area.
                        </p>
                        <p>
                            I'm still learning a lot with real projects and studying by my self, talking with friends
                            and sharing ideas.
                        </p>
                    </div>
                </div>
                <div class="inner-content">
                    <img src="../assets/guy-reading.png" class="responsive-image" width="450px" alt="">
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

.header-about-section {
    background-color: #000000;
}

.flex-container {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
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

.about-section {
    background-color: #ffffff;
}

.inner-content {
    margin-top: 170px;
}

.responsive-image {
    width: 100%;
}

#about h2 {
    border-bottom: 4px solid #636363;
}

#about #content {
    margin-top: 20px;
}

#about #content p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    margin: 15px 0;
}
</style>