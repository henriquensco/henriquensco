<template>
  <div class="abilities">
    <h1>Minhas Habilidades</h1>
    <div id="content">

      <!-- <h3>Linguagens</h3> -->

      <div id="abilitie">
        <div id="image">
          <img
            src="@/assets/python.svg"
            alt="Django"
            srcset="@/assets/python.svg"
          />
        </div>
        <div id="title">Python</div>
      </div>

      <div id="abilitie">
        <div id="image">
          <img
            src="@/assets/javascript.svg"
            alt="Django"
            srcset="@/assets/javascript.svg"
          />
        </div>
        <div id="title">JavaScript</div>
      </div>

      <div id="abilitie">
        <div id="image">
          <img
            src="@/assets/php.svg"
            alt="Django"
            srcset="@/assets/php.svg"
          />
        </div>
        <div id="title">PHP</div>
      </div>

      <div id="abilitie">
        <div id="image">
          <img
            src="@/assets/djangoproject.svg"
            alt="Django"
            srcset="@/assets/djangoproject.svg"
          />
        </div>
        <div id="title">Django</div>
      </div>

      <div id="abilitie">
        <div id="image">
          <img
            src="@/assets/laravel.svg"
            alt="Django"
            srcset="@/assets/laravel.svg"
          />
        </div>
        <div id="title">Laravel</div>
      </div>

      <div id="abilitie">
        <div id="image">
          <img
            src="@/assets/vue.svg"
            alt="Django"
            srcset="@/assets/vue.svg"
          />
        </div>
        <div id="title">VueJs</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Abilities",
  components: {},
};
</script>

<style scoped>
.abilities {
  display: grid;
  justify-content: center;
}
h1,
h3,
h4 {
  text-shadow: rgba(255, 255, 255, 0.7) 0 0px 4px;
}
#abilitie {
  display: flex;
  background-color: #ffffff;
  padding: 5px 15px;
  align-items: center;
  border-radius: 4px;
  margin: 14px 0;
}
#abilitie img {
  width: 50px;
}
#abilitie #title {
  color: #0f0f1e;
  font-weight: bold;
  font-size: 20px;
  margin: 0 15px;
}

#abilitie:hover {
  cursor: pointer;
  box-shadow: #787891 0px 1px 5px;
  transform: rotate(2deg);
}
</style>
