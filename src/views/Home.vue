<template>
  <section class="home">
    
    <div id="helloiam">
      <div class="cta-texto">
        <h1>
          Hey, there! <br>
          <span>I'm Henrique</span>
        </h1>
        <span>Desenvolvedor Full Stack</span>
      </div>

      <div>
        <img src="../assets/e-3d-boy-sitting-with-laptop-and-cup.svg" alt="">
      </div>
    </div>
    
  </section>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      data: {}
    }
  },
  components: {},
};
</script>

<style scoped>
.home{
  background: #171717;
  color:#fff;
  margin: 68px 0 0;
  height: 34rem;
}

.cta-texto {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-texto h1 {
  font-size: 2.4rem;
  font-weight: 400;
  color: #fff;
}

#helloiam {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px 0;
  justify-items: center;
  align-items: center;
}

#helloiam img {
  max-width: 60%;
}
</style>
