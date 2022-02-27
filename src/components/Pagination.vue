<template>
  <div class="pagination">
    <div id="projects">
      <div v-for="value in dataPerPage" :key="value.key">
        <a :href="value.html_url" target="_blank">
          <div id="block">
            <span id="title">{{ value.name }}</span
            ><br />
            <span id="language">{{ value.language }}</span>
          </div>
        </a>
      </div>
    </div>
    <div id="buttons">
      <button @click="prevPage()">Prev</button>
      <button v-for="value in totalPages" :key="value.key" :id="'btn-' + value" @click="setPage(value)">
        {{ value }}
      </button>
      <button @click="nextPage()">Next</button>
    </div>
  </div>
</template>

<script>
//import { nextTick } from "@vue/runtime-core";
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    data: Object,
  },
  computed: {
    pages() {
      let pages = Math.ceil(this.data.length / 6);
      return pages;
    },
    dataPerPage() {
      let page = this.data;
      let index = this.currentPage * this.pages;
      page = page.slice(index, index + this.pages);
      /* nextTick(() => {
        if(this.currentPage == document.querySelector('#btn-'+this.currentPage).textContent) {
          document.querySelector('#btn-'+this.currentPage).style = 'background-color:red;';
        } else {
          document.querySelector('#btn-'+(this.currentPage-1)).style = 'background-color:blue;';
        }
      }); */
      return page;
    },
    totalPages() {
      let qu = [];

      for (let num = 1; num < Math.ceil(this.data.length / this.pages); num++) {
        qu.push(num);
      }
      return qu;
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages.length) {
        this.currentPage++;
      }
    },
    setPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: grid;
  justify-content: center;
}
#projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  width: 250px;
}
#block #title {
  font-weight: bold;
}
@media (max-width: 420px) {
  #projects {
    display: flex;
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
.ativo {
  background-color: #ad731c;
}
</style>
