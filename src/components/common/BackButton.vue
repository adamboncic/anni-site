<template>
  <div class="back-to-page">
    <router-link class="back-button" :to="path">
      <i class="fa fa-arrow-left"></i>Back
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: ['path']
};
</script>

<style>
  .back-to-page {
      position: absolute;
      top: 0px;
      font-size: small;
      transition: all .2s ease-in-out;
  }
  .back-to-page:hover {
    cursor: pointer;
      transform: scale(1.05);
  }
  .back-button {
      color: #343a40 !important;
      letter-spacing: .5px;
      text-decoration: none !important;
  }
  .back-button i {
      margin-right: .5rem;
  }
</style>