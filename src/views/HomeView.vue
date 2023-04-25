<template>
  <div class="home">
    <div id="content">
      <h1 class="slide-up">
        <div class="home-header">
          <div class="home-title"><span>Annika</span><span>Chavez</span></div>
        </div>
      </h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeView'
  }
</script>

<style scoped>
  .home-header {
    margin-top: 4em;
  }

  @media screen and (max-width: 576px) {
    .home-header {
      margin-top: 3em;
    }
  }
</style>