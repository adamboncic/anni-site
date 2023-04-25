<template>
  <div class="music-video">
    <BackButton path="/directing" />

    <!-- Video -->
    <div class="video-content">
      <div class="video-header">
        <span class="video-title">Tender</span><br />
        <span class="artist-name">Tina Chau Le</span>
      </div>
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/MY6ZNtb4E0M"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Gallery -->
    <ImageLightbox :imageData="imageData" />
  </div>
</template>

<script>
export default {
  name: 'MusicVideoView',
  data() {
    return {
      subFolders: ['Directing', 'MusicVideo', 'Tina']
    };
  },
  computed: {
    imageData() {
      return [
        { imageUrl: this.getImageUrl('still_1.jpg'), imageClass: 'still-block' },
        { imageUrl: this.getImageUrl('still_2.jpg'), imageClass: 'still-block' },
        { imageUrl: this.getImageUrl('still_3.jpg'), imageClass: 'still-block' },
        { imageUrl: this.getImageUrl('still_4.jpg'), imageClass: 'still-block' },
      ];
    },
  },
  methods: {
    getImageUrl(fileName) {
      return this.$cloudinaryUrl('image', fileName, this.subFolders);
    },
  },
};
</script>