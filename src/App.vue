<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <HeaderComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: "App",
  components: {
    HeaderComponent
  }
}
</script>

<style>
*{
  overflow: hidden;
  scroll-behavior: smooth;
}
body {
  background-color: #0f0f1e;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#e4e4e4;
}
</style>
