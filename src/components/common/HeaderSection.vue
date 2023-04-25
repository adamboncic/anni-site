<template>
  <div id="header">
    <Navigation />
  </div>
</template>


<script>
import Navigation from './NavigationSection.vue';


export default {
  name: 'HeaderSection',
  components: {
    Navigation,
  },
};
</script>

<style scoped>
#header {
  margin: 0 auto;
  padding: 3em 0;
}

@media screen and (max-width: 576px) {
  #header {
    padding: 2em 0 1em;
  }
}
</style>