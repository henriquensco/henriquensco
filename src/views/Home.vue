<template>
  <section class="home">
    <div id="helloiam">
      <div class="cta-texto">
        <h1>
          Hey, there! <br />
          <span>I'm Henrique</span><span id="slash">|</span>
        </h1>
        <span id="dev-title">Desenvolvedor Full Stack</span>
      </div>

      <div>
        <img src="../assets/e-3d-boy-sitting-with-laptop-and-cup.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      data: {},
    };
  },
  components: {},
};
</script>

<style scoped>
.home {
  background: #171717;
  color: #fff;
  margin: 68px 0 0;
  height: 34rem;
}

.cta-texto {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
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

@media (max-width: 600px) {
  #helloiam {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  #helloiam div {
    margin: 15px 0;
  }
}

@keyframes slash {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

#slash {
  color: #621381;
  animation: slash 0.5s alternate infinite;
}

#dev-title {
    color: #621381;
    display: block;
    margin-left: -1.5rem;
    font-weight: bold;
}
</style>
