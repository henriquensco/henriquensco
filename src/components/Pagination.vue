<template>
  <div class="pagination">
    <div id="page">
      <div v-for="value in dataPerPage" :key="value.key" id="card">
        <div id="card-left">
          <div><span>PROJETO</span></div>
          <div>
            <span>{{ value.name }}</span>
          </div>
          <div>
            <a :href="value.html_url" target="_blank">Ver repositório</a>
          </div>
        </div>
        <div id="card-right">
          <div id="language"><span>Linguagem: HTML</span></div>
          <div id="description">
            <span v-if="value.description">{{ value.description }}</span>
            <span v-else>Não há descrição nesse projeto! :(</span>
          </div>
          <div id="dates">
            <div>
              <span>Criado em: {{ value.created_at.slice(0, 10) }}</span>
            </div>
            <div>
              <span>Atualizado em: {{ value.updated_at.slice(0, 10) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="buttons">
      <button @click="prevPage()">Prev</button>
      <button
        v-for="value in totalPages"
        :key="value.key"
        :id="'btn-' + value"
        @click="setPage(value)"
        :class="{ ativo: currentPage == value }"
      >
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

#page {
  display: grid;
  width: 700px;
  margin: 0 auto;
}

#card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 10px;
  margin: 5px 5px;
  /* box-shadow: rgb(248 248 248 / 37%) 0px 0px 5px 1px; */
}
#card:hover {
  box-shadow: rgb(53 53 87 / 95%) 0px 0px 7px 1px;
  cursor: pointer;
}
#card #card-left {
  background-color: #361d70;
  float: left;
  padding: 8px 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 24ch;
}
#card #card-right {
  background-color: #ffffff;
  float: right;
  padding: 8px 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
#card #card-left div {
  margin: 5px 0;
  text-align: left;
}
#card #card-left div:nth-child(3) {
  margin-top: 20px;
}
#card #card-left div:nth-child(1) {
  color: #bebebe;
  font-size: 11px;
}
#card #card-left div:nth-child(2) {
  color: #e7e7e7;
  font-size: 16px;
  font-weight: bold;
}
#card #card-left div:nth-child(3) a {
  color: #969696;
  font-size: 11px;
  text-decoration: none;
}

#card #card-right #dates {
  display: flex;
  font-size: 12px;
  color: #bebebe;
  font-weight: bold;
  position: sticky;
  top: 73%;
  overflow: hidden;
}
#card #card-right #description {
  text-align: left;
  padding: 5px 15px;
  color: #7e7e7e;
}
#card #card-right #language {
  text-align: left;
  padding: 5px 15px;
  color: #7e7e7e;
  font-size: 12px;
}
#card #card-right #dates div:first-child {
  border-right: 1px solid #a7a7a7;
}
#card #card-right #dates div {
  padding: 2px 15px 1px 15px;
}

#buttons button {
  padding: 10px 10px;
  margin: 10px 5px;
  cursor: pointer;
  border-radius: 25px;
  font-weight: bold;
  border: 1px solid #252636;
  display: inline-block;
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
  background-color: #777887;
  color: #ffffff;
}
#date_crup {
  font-weight: bold;
}

@media (max-width: 420px) {
  #page {
    display: flex;
    flex-wrap: wrap;
    width: 350px;
    margin: 0 auto;
  }
  #card #card-left {
    width: 15ch;
  }
  .pagination {
    margin-bottom: 15%;
  }
}
</style>
