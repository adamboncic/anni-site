<template>
  <div class="bolognese">
    <BackButton path="/directing/narrative"/>

      <!-- Content -->
      <div class="film-content">
        <div class="film-details">
          <div class="film-header-container">
            <h5 class="film-header">Bolognese (2021)</h5>
          </div>

          <div class="film-trailer">
            <video controls muted autoplay loop playsinline>
              <source :src="trailer" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div class="film-description">
            <p>An unforeseen confession derails expectations when Mira meets face to face with the man she's been virtually dating for weeks.</p>
            <p class="festivals">
              <strong>Palm Springs Shortfest (2022)</strong> - Nominee Best US Short<br>
              <strong>NFFTY (2022)</strong> - Audience Award / Nominee Best Narrative<br>
              <strong>Cinema Femme Short Film Festival (2022)</strong> - Official Selection<br>
              <strong>IFF Boston (2023)</strong> - Official Selection 
            </p>
          </div>
        </div>

        <div class="film-poster">
          <img class="img-fluid" :src="getImageUrl('poster.jpg')">
        </div>
      </div>

      <!-- Gallery -->
      <ImageLightbox :imageData="imageData" />

  </div>
</template>

<script>
export default {
  name: 'BologneseView',
  data() {
    return {
      subFolders: ['Directing', 'Narrative', 'Bolognese']
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
        { imageUrl: this.getImageUrl('festival_still.jpg'), imageClass: 'still-block big' },
        { imageUrl: this.getImageUrl('still_4.jpg'), imageClass: 'still-block' },
        { imageUrl: this.getImageUrl('still_3.jpg'), imageClass: 'still-block' },
      ];
    },
  },
  methods: {
    getImageUrl(fileName) {
      return this.$cloudinaryUrl('image', fileName, this.subFolders);
    }
  },
};
</script>

<style scoped>

.film-header {
  letter-spacing: 1px;
  padding-bottom: 1em;
}

.film-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.film-details {
  flex: 1 1 60%;
  padding-right: 30px;
}

.festivals {
  line-height: 1.75;
  padding-top: 1em;
}

.film-poster {
  padding-left:  1rem;
  flex: 1 1 40%;
}

.film-poster img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .film-poster {
    display: none;
  }
  .film-details {
    padding-right: 0;
  }
}
</style>

