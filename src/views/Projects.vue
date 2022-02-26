<template>
  <div class="projects">
    <h1>Projetos</h1>

    <div id="projects">
      <div v-for="value in data" :key="value.key">
        <a :href="value.html_url" target="_blank">
          <div id="block">
            <span id="title">{{ value.name }}</span
            ><br />
            <span id="language">{{ value.language }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Projects",
  data() {
    return {
      data: [],
    };
  },
  components: {},
  mounted() {
    this.githubRepositories();
  },
  methods: {
    async githubRepositories() {
      this.data = "null";
      await axios
        .get("https://api.github.com/users/henriquensco/subscriptions")
        .then((res) => {
          let arr = res.data.filter((value) => {
            if (value.language == null) {
              return;
            }
            return value;
          });
          this.data = arr;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.projects {
  display: grid;
  justify-content: center;
}
h1,
h3,
h4 {
  text-shadow: rgba(255, 255, 255, 0.7) 0 0px 4px;
}
#projects {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}
#projects a {
  text-decoration: none;
}
#block {
  background-color: #ffffff;
  border-radius: 4px;
  margin: 4px 5px;
  color: #0f0f1e;
  padding: 15px 15px;
}
#block #title {
  font-weight: bold;
}
@media (max-width: 420px) {
  #projects {
    display: grid;
    width: 100%;
    justify-content: center;
    margin-bottom: 106px;
  }
  #block {
    padding: 5px 5px;
  }
}
</style>
