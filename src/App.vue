<template>
  <div id="app">
    <Header />

    <router-view v-slot="{ Component }" class="main-content">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/HeaderSection.vue';
import Footer from '@/components/common/FooterSection.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
  margin: 0 1em;
  height: 100vh;
  animation: fade-in 1s ease;
}
</style>
