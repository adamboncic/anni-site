<template>
  <div class="bad-jew-good-girl">
    <BackButton path="/directing/narrative"/>

      <!-- Content -->
      <div class="film-content">
          <div class="film-header-container">
            <h5 class="film-header">Bad Jew Good Girl (2023)</h5>
          </div>

          <div class="film-trailer">
            <video controls muted autoplay loop playsinline>
              <source :src="''" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div class="film-description">
            <p>Laurel, a non practicing Jew, is alone in her apartment on Yom Kippur.
              <br><br><em>Written by, Produced by, and Starring Lucy Grebin</em>
            </p>
          </div>
      </div>

      <!-- Gallery -->
      <ImageLightbox :imageData="imageData" />
  </div>
</template>

<script>

export default {
  name: 'BadJewGoodGirlView',
  data() {
    return {
      subFolders: ['Directing', 'Narrative', 'BadJewGoodGirl']
    };
  },
  computed: {
    trailer() {
      return this.$cloudinaryUrl('video', 'trailer.mp4', this.subFolders)
    },
    imageData() {
      return [
        { imageUrl: this.getImageUrl('still_1.jpg'), imageClass: 'still-block' },
        { imageUrl: this.getImageUrl('still_2.jpg'), imageClass: 'still-block' },
        { imageUrl: this.getImageUrl('still_5.jpg'), imageClass: 'still-block big' },
        { imageUrl: this.getImageUrl('still_3.jpg'), imageClass: 'still-block' },
        { imageUrl: this.getImageUrl('still_4.jpg'), imageClass: 'still-block' },
      ];
    },
  },
  methods: {
    getImageUrl(fileName) {
      return this.$cloudinaryUrl('image', fileName, this.subFolders)
    },
  }
};
</script>

