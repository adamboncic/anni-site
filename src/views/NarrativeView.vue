<template>
  <div class="narrative">
    <div class="row">
      <BackButton path="/directing" />

      <div class="directing-nav">
        <div>
          <router-link
            class="directing-link"
            to="/directing/narrative/bolognese"
            :data-src="bologneseStill"
            @mouseover="showImage"
            @mouseleave="hideImage"
          >
            Bolognese (2021)
          </router-link>
        </div>

        <div>
          <router-link
            class="directing-link"
            to="/directing/narrative/helium"
            :data-src="heliumStill"
            @mouseover="showImage"
            @mouseleave="hideImage"
          >
            Helium (2022)
          </router-link>
        </div>

        <div>
          <router-link
            class="directing-link"
            to="/directing/narrative/bad-jew-good-girl"
            :data-src="badJewGoodGirlStill"
            @mouseover="showImage"
            @mouseleave="hideImage"
          >
            Bad Jew Good Girl (2023)
          </router-link>
        </div>
      </div>
      <!-- <div class="preview-container">
        <img class="img-fluid" :src="currentImage" :style="{ opacity: imageOpacity }" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'NarrativeView',
  data() {
    return {
      currentImage: '',
      imageOpacity: 0,
    };
  },
  computed: {
    bologneseStill() {
      return this.$cloudinaryUrl('image', 'still_4', ['Directing', 'Narrative', 'Bolognese'])
    },
    heliumStill() {
      return this.$cloudinaryUrl('image', '', ['Directing', 'Narrative', 'Helium'])
    },
    badJewGoodGirlStill() {
      return this.$cloudinaryUrl('image', '', ['Directing', 'Narrative', 'BadJewGoodGirl'])
    },
  },
  methods: {
    showImage(event) {
      this.currentImage = event.target.getAttribute('data-src');
      this.imageOpacity = 1;
    },
    hideImage() {
      this.imageOpacity = 0;
    },
  },
};
</script>

<style scoped>
.directing-nav {
  flex-direction: column;
}
.preview-container {
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 650px;
}
.preview-container img {
  transition: opacity 0.3s ease-in-out;
}
</style>