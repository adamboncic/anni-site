<template>
  <div class="photography">
    <ImageGallery :folder="'Photography'"/>
  </div>
</template>

<script>
  import ImageGallery from '@/components/photography/ImageGallery.vue';

  export default {
    name: 'PhotographyView',
    components: {
      ImageGallery
    }
  }
</script>

<style scoped>

</style>