<template>
  <div id="nav" class="nav-wrap">
    <h1 class="home-link-container slide-up" v-if="isNotHomePage">
      <div class="home-link">
        <transition name="fade" mode="out-in">
          <router-link class="home-title" to="/">A. C.</router-link>
        </transition>
      </div>
    </h1>
    <nav class="navbar navbar-expand-sm navbar-light p-0">
      <div class="navbar-header">
        <button
          class="navbar-toggler border-0"
          type="button"
          @click="toggleNav"
          :aria-expanded="navExpanded"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-centered" v-show="isNotHomePage">
        <router-link class="navbar-brand mobile-home-title slide-up" to="/">A. C.</router-link>
      </div>
      <div
        class="collapse navbar-collapse justify-content-center slide-up"
        :class="{ show: navExpanded }"
        id="mainNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link main-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link main-link" to="/directing">Directing</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link main-link" to="/photography">Photography</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link main-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationSection',
  data() {
    return {
      navExpanded: false,
    };
  },
  computed: {
    isNotHomePage() {
      return this.$route.name !== 'Home';
    },
  },
  methods: {
    toggleNav() {
      this.navExpanded = !this.navExpanded;
    },
  },
};
</script>

<style scoped src="@/assets/styles/navigation.css"></style>

