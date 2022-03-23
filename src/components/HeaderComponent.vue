<template>
  <header>
    <div id="content">
      <div id="logo">
        <h4>Henrique's</h4>
      </div>
      <div class="topnav" id="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#abilities">Habilidades</a></li>
          <li><a href="#experiences">Experiências</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#about">Sobre</a></li>
        </ul>
      </div>
      <li class="icon">
        <a @click="activeMenu"
          ><img src="@/assets/hamburguer-menu.svg" alt=""
        /></a>
      </li>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {},
  data() {
    return {
      responsiveMenu: false,
    };
  },
  methods: {
    activeMenu() {
      this.responsiveMenu = true;
      let menu = document.querySelector("#menu");
      if (menu.className === "topnav") {
        menu.className += " responsive";
        //menu.classList.toggle('');
      } else {
        menu.className = "topnav";
      }

      console.log(menu);
    },
  },
};
</script>

<style scoped>
/* header {
  background-color: #21314e;
  border-bottom: 1px solid #15243e;
  padding: 25px;
} */

#content {
  display: flex;
  justify-content: space-around;
  background-color: #21314e;
  border-bottom: 1px solid #15243e;
  padding: 25px;
  position: fixed;
  top: 0;
  width: 100%;
}

#menu ul {
  display: flex;
  list-style: none;
  justify-content: center;
}

#menu ul li a {
  padding: 5px 5px;
  color: #d6d6d6;
  font-weight: bold;
  text-decoration: none;
}

.icon {
  display: none;
}

@media (max-width: 600px) {
  .topnav {
    display: none;
  }
  .icon {
    display: block;
    cursor: pointer;
    margin-top: -5px;
  }

  .topnav.responsive {
    position: absolute;
    display: block;
    top: 102%;
    background: rgb(33 49 78 / 99%);
    width: 50%;
    right: 0;
    height: 100rem;
  }

  @keyframes openMenu {
    from {
      right: -100%;
    }
    to {
      right: 0;
    }
  }


  @keyframes closeMenu {
    from {
      right: 0;
    }
    to {
      right: -100%;
    }
  }

  #menu {
    text-align: justify;
  }

  #menu ul {
    display: block;
  }

  #menu ul li:hover {
    background: rgb(33 49 78 / 96%);
  }

  #menu ul li a {
    color: #ededed;
    padding: 15px 15px;
  }

  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
