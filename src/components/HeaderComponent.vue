<template>
  <header>
    <div id="content">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/experiences">Experiências</router-link></li>
        <li><router-link to="/projects">Projetos</router-link></li>
        <li><router-link to="/contact">Contato</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
header {
  /* From https://css.glass */
  background: rgb(15 15 30 / 90%);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgb(30 30 73 / 76%);
  backdrop-filter: blur(8.8px);
  -webkit-backdrop-filter: blur(8.8px);
  border: 1px solid rgb(17 17 35 / 54%);
  position: fixed;
  bottom: 1.5%;
  width: 98.5%;
  padding: 0 0 5px;
  height: 60px;
}

@media(max-width: 642px) {
    header {
        width: 97%;
    }
}

header:before {
  content: "";
  background: inherit;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-shadow: inset 0 0 0 3000px rgb(20 20 40 / 80%);
  filter: blur(10px);
}

/* header {
box-shadow: 0 0 5px 0;
            background: inherit;
            backdrop-filter: blur(10px);
            margin: 100px;
            text-align: center;
} */

#content {
  position: relative;
  z-index: 1;
}

#content ul li {
  display: inline-block;
  padding: 5px 5px;
}

#content ul li a {
  color: #e4e4e4;
  text-decoration: none;
  font-weight: bold;
}

#content ul li a:hover {
    color: #acacac;
}
</style>