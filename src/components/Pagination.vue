<template>
  <div class="pagination">
    <div id="projects">
      <div v-for="value in logs" :key="value.key">
        <a :href="value.html_url" target="_blank">
          <div id="block">
            <span id="title">{{ value.name }}</span
            ><br />
            <span id="language">{{ value.language }}</span>
          </div>
        </a>
      </div>
    </div>
    <div style="display:none">{{logs}}</div>
    <div id="buttons">
      <button @click="prevPage()">Prev</button>
      <button>01</button>
      <button @click="nextPage()">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
      return {
          currentPage: 1,
      }
  },
  props: {
    data: Object,
  },
  computed: {
    dataax() {
      let pages = Math.round(this.data.length/8);
      return pages;
    },
    logs() {
      let page = this.data;
      page = page.slice(0, this.currentPage + 1);
      console.log(page);
      return page;
    }
  },
  mounted() {
      //console.log(this.data);

  },
  methods: {
      numPages() {
        console.log(this.data);
      },
      prevPage() {
        if(this.currentPage > 0) {
          this.currentPage--;
        }
      },
      nextPage() {
        this.currentPage++;
      }
  }
};
</script>

<style scoped>
.pagination {
  display: grid;
  justify-content: center;
}
#projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
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

#buttons button {
  padding: 10px 10px;
  margin: 10px 5px;
  cursor: pointer;
  border-radius: 25px;
  background-color: #dfdfdf;
  font-weight: bold;
  border: 1px solid #252636;
}

#buttons button:first-child,
#buttons button:last-child {
  background-color: #777887;
  border-radius: 10px;
  color: #ffffff;
  font-weight: bold;
  border: 1px solid #252636;
}
#buttons button:first-child:hover,
#buttons button:last-child:hover {
  background-color: #707180;
  color: #eeebeb;
}
#buttons button:hover {
  background-color: #bebebe;
}
</style>
