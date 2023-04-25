<template>
  <div class="image-gallery">
    <div v-for="image in images" :key="image.public_id" class="image-wrapper">
      <img v-lazy="image.secure_url" :alt="image.public_id" class="gallery-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  props: ['folder'],
  data() {
    return {
      images: [],
    };
  },
  async created() {
    const folderName = this.folder;
    try {
      const response = await fetch(`http://localhost:3000/api/images/${folderName}`);

      this.images = await response.json();
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  },
};
</script>

<style scoped>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}

.image-wrapper {
  overflow: hidden;
  position: relative;
}

.gallery-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.image-wrapper:hover .gallery-image {
  transform: scale(1.1);
}
</style>
