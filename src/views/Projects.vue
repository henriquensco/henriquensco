<template>
  <div class="projects">
    <h1>Projetos</h1>

    <div id="projects">
      <Pagination :data="data" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "@/components/Pagination";

export default {
  name: "Projects",
  data() {
    return {
      data: [],
    };
  },
  components: {
    Pagination,
  },
  methods: {
    async githubRepositories() {
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
          return arr;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.githubRepositories();
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
</style>
