<template>
  <div class="commercial">
    <BackButton path="/directing" />

    <!-- Video -->
    <div class="video-content">
      <div class="video-header">
        <span class="video-title">Flaunt Magazine 
          <span class="x-mark"> x </span> 
          <span class="fw-light">Travis Bennet</span>
        </span>
      </div>
      <div class="video-container">
        <video controls muted autoplay loop playsinline>
          <source :src="getVideoUrl('Travis_Bennett_Flaunt_Film.mp4')" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>

    <!-- Gallery -->
    <ImageLightbox :imageData="imageData" />
  </div>
</template>

<script>

export default {
  name: 'CommercialView',
  data() {
    return {
      subFolders: ['Directing', 'Commercial']
    };
  },
  computed: {
    trailer() {
      return this.$cloudinaryUrl('video', 'trailer.mp4', this.subFolders)
    },
    imageData() {
      return [
        { imageUrl: this.getImageUrl('travis_1.jpg'), imageClass: 'still-block' },
        { imageUrl: this.getImageUrl('travis_2.jpg'), imageClass: 'still-block' },
      ];
    },
  },
  methods: {
    getVideoUrl(fileName) {
      return this.$cloudinaryUrl('video', fileName, this.subFolders);
    },
    getImageUrl(fileName) {
      return this.$cloudinaryUrl('image', fileName, this.subFolders);
    }
  },
};
</script>

<style scoped>
  .video-title {
    font-size: 25px;
  }
  .x-mark {
    text-transform: none;
    font-weight: 100;
  }
</style>
