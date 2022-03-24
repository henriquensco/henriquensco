<template>
  <section class="projetos">
    <div id="projects">
      <h1>Projetos</h1>

      <div id="list-projects">
        <div v-for="value in dadosFiltrados" :key="value.index" id="project">
          <div id="title">
            <div>
              <span>{{ value.name }}</span>
            </div>
            
            <div>
              <a :href="value.html_url" target="_blank" rel="noopener noreferrer"
                ><img src="@/assets/icons8-github.svg" alt="" srcset=""></a
              >
            </div>
          </div>
          <div id="projectbody">
            <div v-if="value.description">{{ value.description }}</div>
            <div v-else>Esse projeto não tem descrição. :(</div>
            <div><b>Criado em:</b> {{ value.created_at.slice(0, 10) }}</div>
          </div>
        </div>
      </div>
      <!-- {{data[0]}} -->
    </div>
  </section>
</template>

<script>
import { apiRepositories } from "../api/github";

export default {
  name: "Experiencias",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.incremento();
  },
  computed: {
    dadosFiltrados() {
      let data = this.data;
      let params = [];

      data.forEach((element, key) => {
        if (key < 4) {
          params.push(element);
        }
        return params;
      });

      return params;
    },
  },
  methods: {
    async incremento() {
      this.data = await apiRepositories();
    },
  },
};
</script>

<style scoped>
.projetos {
  background: #171717;
  height: 35rem;
}

#projects {
  padding: 40px 0;
}

#projects h1 {
  font-size: 2.4rem;
  padding: 70px;
}

#list-projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  margin: 80px 170px 0 170px;
  gap: 20px;
  justify-content: space-around;
  align-content: flex-end;
}

#list-projects #project {
  background-color: #fcfcfc;
  color: #171717;
  border-radius: 4px;
  box-shadow: rgb(252 252 252 / 39%) 0px 0px 12px 0px;
}

@media (max-width: 890px) {
  #list-projects {
    margin: 50px 15px 0 15px;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
}

@media (max-width: 750px) {
  #list-projects {
    margin: 50px 15px 0 15px;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
}

@media (max-width: 600px) {
  #list-projects {
    margin: 50px 15px 0 15px;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
}

#list-projects #project #title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}

#list-projects #project #title {
  background-color: #603777;
  color: #171717;
  font-weight: bold;
}

#list-projects #project #projectbody {
  padding: 15px 9px;
  font-size: 0.9rem;
}

#list-projects #project #title img {
  width: 1.5rem;
}

#list-projects #project #projectbody div {
  margin: 10px 0;
}
</style>
