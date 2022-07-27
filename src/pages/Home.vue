<template>

    <header id="navbar">
        <div class="container">
            <div class="flex-container">
                <div>
                    <span class="text-white">Henrique</span>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="header-about-section content">
            <div class="align-center">
                <div id="about-me">
                    <div>
                        <h1 class="text-white">Hey, I'm Henrique</h1>
                    </div>
                    <div @click="aboutMe()" id="click-about-me">
                        <span class="text-white">About Me</span>
                    </div>

                    <div id="teste" class="text-white">
                    </div>
                </div>
            </div>
        </section>

        <section class="content about-section" id="about">
            <div class="container flex-container">
                <div class="inner-content-170">
                    <div id="title">
                        <h2 class="margin-bottom-4">A little bit about me...</h2>
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
                <div class="inner-content-170">
                    <img src="../assets/guy-reading.png" class="responsive-image" width="450px" alt="">
                </div>
            </div>
        </section>

        <section class="content companys">
            <div class="container flex-container">
                <div class="inner-content-90">
                    <div id="title">
                        <h2 class="text-white margin-bottom-4">Experiences</h2>
                    </div>

                    <div id="experiences">
                        <div class="experience-block">
                            <span id="title">Fullstack Developer</span>
                            <img src="../assets/dpc.png" alt="" />
                            <div class="description">
                                <p>I acted as a Fullstack Developer at DPC Distribuidor Atacadista S/A about nine
                                    months. </p>
                                <p>While working at this Company, the most of the demands, I worked with PHP, Laravel
                                    and VueJs</p>
                                <p>I helped the team with the Integrations and implement new feature to the Customer
                                    Service and CallCenter.</p>
                            </div>
                        </div>

                        <div class="experience-block">
                            <span id="title">Fullstack Developer</span>
                            <img src="https://abcomm.org/wp-content/uploads/2022/03/Infracommerce.png" alt="" />
                            <div class="description">
                                <p>Working with PHP as a FullStack Developer implementing new features with the team and
                                    solving the reported bugs.</p>
                                <p>In addition to create documentations for the developed features we develope.</p>
                                <p>The stacks that I use to do a good work, by now, is PHP, Confluence and Swagger for
                                    the APIs Documentation.</p>
                            </div>
                        </div>

                    </div>
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

<style scoped lang="css">
header {
    background-color: #333;
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
    margin-top: calc(40vh - 5%);
    justify-content: center;
    max-width: 700px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

#about-me div {
    margin: 25px 0;
}

#about-me h1 {
    font-size: 4rem;
}

#click-about-me {
    background-color: #161616;
    padding: 17px;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    width: 170px;
}

#click-about-me:active {
    background-color: #2c2c2c;
}

.about-section {
    background-color: #ffffff;
}

.inner-content-170 {
    margin-top: calc(25vh - 5%);
}

.inner-content-90 {
    margin-top: 90px;
}

.responsive-image {
    width: 100%;
}

.margin-bottom-4 {
    border-bottom: 4px solid #636363;
    max-width: 500px;
}

#about #content {
    margin-top: 20px;
}

#about #content p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    margin: 15px 0;
}

.companys {
    background-color: #161616;
}

@media (max-width:520px) {
    #about img {
        display: none;
    }
}

.text-white {
    color: #ffffff;
}

#experiences {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.experience-block {
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 3px;
    padding: 15px;
    box-shadow: #000000 3px 1px 20px;
    width: 17rem;
}

#experiences img {
    max-width: 200px;
    padding: 15px 0;
}

@media (min-width: 427px) {
    .experience-block {
        margin-right: 30px;
    }
}

.description {
    font-weight: normal;
    text-align: justify;
}
</style>