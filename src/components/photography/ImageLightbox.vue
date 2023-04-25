<template>
  <div class="stills-gallery">
    <img
      v-for="(item, index) in imageData"
      :key="index"
      class="lightbox-still"
      :class="item.imageClass"
      :src="item.imageUrl"
      @click="showLightbox(index)"
    />
    <VueEasyLightbox
      :visible="visible"
      :imgs="allImages()"
      :index="index"
      @hide="handleHide"
    />
  </div>
</template>
<script>

export default {
  name: 'ImageLightbox',
  props: {
    imageData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
      index: 0,
      images: this.imageUrls,
    };
  },
  methods: {
    allImages() {
      return this.imageData.map((item) => item.imageUrl);
    },
    showLightbox(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>