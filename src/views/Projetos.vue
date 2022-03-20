<template>
  <section class="projetos">
    <div id="projects">
      <h1>Projetos</h1>

      {{data[0]}}
    </div>
  </section>
</template>

<script>
import { apiRepositories } from "../api/github";

export default {
  name: "Experiencias",
  data() {
    return {
        data: []
    };
  },
  mounted() {
    this.incremento();
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
}

#projects {
  padding: 60px 0;
}

#projects h1 {
  font-size: 2.4rem;
}
</style>
