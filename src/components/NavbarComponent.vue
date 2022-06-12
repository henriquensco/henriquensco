<template>
    <nav>
        <div class="content">
            <div>
                <h3>Henrique's</h3>
            </div>
            <div>
                <i id="hamburguer-icon" class="fas fa-bars" @click="showMenu"></i>
            </div>
        </div>

        <div class="hidden">
            <i id="close-menu" class="fas fa-times" @click="closeMenu"></i>

            <div id="menu">
                <a href="#">Início</a>
                <a href="#about">Sobre</a>
                <a href="#experiences">Experiências</a>
                <!-- <a href="#projects">Projetos</a> -->
                <a href="#contact">Contato</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            showMenuBool: false
        }
    },
    methods: {
        showMenu() {
            if (!this.showMenuBool) {
                this.showMenuBool = true;
                const va = document.querySelector('.hidden').style = 'width: 100%';
            } else {
                this.showMenuBool = false;
                const va = document.querySelector('.hidden').style = 'width: 0%;';
            }
        },
        closeMenu() {
            this.showMenuBool = false;
            const va = document.querySelector('.hidden').style = 'width: 0%;';
        }
    }
}
</script>

<style scoped>
nav {
    padding: 5px 5px;
    background-color: #000;
    color: #fff;
}

.content {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    height: 55px;
}

#hamburguer-icon {
    font-size: 29px;
    cursor: pointer;
}

#hamburguer-icon:hover {
    color: #e7e7e7;
}

#close-menu {
    font-size: 36px;
    padding: 15px 0 0 20px;
    cursor: pointer;
}

.hidden {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    float: right;
    right: 0;
    overflow-x: hidden;
    transition: 0.5s;
    width: 0;
}

#menu {
    position: relative;
    text-align: center;
    top: 25%;
    width: 100%;
}

#menu a {
    display: block;
    text-decoration: none;
    padding: 5px 5px;
    font-size: 25px;
    color: #818181;
}

#menu a:hover{
    color: #f3f3f3;
    transition: 0.3s;
}
</style>