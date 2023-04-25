<template>
  <div class="helium">
    <BackButton path="/directing/narrative"/>

      <!-- Content -->
      <div class="film-content">
          <div class="film-header-container">
            <h5 class="film-header">Helium (2022)</h5>
          </div>

          <div class="film-trailer">
            <video controls muted autoplay loop playsinline>
              <source :src="trailer" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div class="film-description">
            <p>An absurdist examination of female friendship, Helium explores various dynamics of intimacy over the course of a double date à la maison. Though each is equipped with a romantic partner for the night, Claire and Reagan find themselves drawn more strongly to the comfort of their own friendship than to their dates, leading to a rather dissociative evening.</p>
            <p class="festivals">
              <strong>Cinema Femme Short Film Festival (2023)</strong> - Official Selection<br>
              <strong>IFF Boston (2023)</strong> - Official Selection
            </p>
          </div>
      </div>

      <!-- Gallery -->
      <div class="stills-gallery">
        <img
          v-for="(img, index) in images.slice(0, 2)"
          :key="index"
          class="lightbox-still still-block"
          :class="{
            'big': img === getImageUrl('banner.jpg'),
            'med': img === getImageUrl('bathroom.jpg'),
          }"
          :src="img"
          @click="showLightbox(index)"
        />

        <div class="stacked">
          <img
            v-for="(img, index) in images.slice(2, 4)"
            :key="index"
            class="lightbox-still still-block big"
            :src="img"
            @click="showLightbox(index + 2)"
          />
        </div>

        <img
          v-for="(img, index) in images.slice(4)"
          :key="index"
          class="lightbox-still still-block"
          :class="{
            'small': img === getImageUrl('bts_gigi.jpg') || img === getImageUrl('bts_tyerion.jpg'),
          }"
          :src="img"
          @click="showLightbox(index + 4)"
        />
      </div>

      <VueEasyLightbox
        :visible="visible"
        :imgs="images"
        :index="index"
        @hide="handleHide"
      />
  </div>
</template>

<script>

export default {
  name: 'HeliumView',
  data() {
    return {
      subFolders: ['Directing', 'Narrative', 'Helium'],
      visible: false,
      index: 0,
      images: []
    };
  },
  mounted() {
    this.images = [
      this.getImageUrl('banner.jpg'),
      this.getImageUrl('bathroom.jpg'),
      this.getImageUrl('still_tyerion.jpg'),
      this.getImageUrl('still_sophie.jpg'),
      this.getImageUrl('bts_gigi.jpg'),
      this.getImageUrl('bts_s_t.jpg'),
      this.getImageUrl('bts_tyerion.jpg'),
    ];
  },
  computed: {
    trailer() {
      return this.$cloudinaryUrl('video', 'trailer.mp4', this.subFolders)
    }
  },
  methods: {
    getImageUrl(fileName) {
      return this.$cloudinaryUrl('image', fileName, this.subFolders)
    },
    showLightbox(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  }
};
</script>

<style scoped>
  .still-block.small {
    width: calc(25% - 5px);
  }
  .stacked {
    display: flex;
    flex-direction: column;
    width: calc(33.333% - 5px);
  }
  @media screen and (max-width: 576px) {
    .stacked {
      width: 100%;
    }
}
</style>

