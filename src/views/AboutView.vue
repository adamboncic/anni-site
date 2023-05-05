<template>
  <div class="about">
    <div class="row justify-content-center">
      <div class="about-description col-sm-4 order-1 order-md-1 shift-in" v-cloak>
        <h3 class="page-title">About Me</h3>
        <p>
          <strong>Annika Chavez</strong> is a director and writer based between Los Angeles and New York. Her 2021 film BOLOGNESE played Palm Springs International Shortfest, where it was nominated for best US Short, and at NFFTY, where it won an Audience Award, among others. It continues to make festival rounds this year. Her short, HELIUM premiered at IFF Boston 2023 and continues its festival journey this year as well. Most recently she completed another short, BAD JEW GOOD GIRL. As a writer, she was a semifinalist for the 2021 NBC Nosotros Monologue Slam. She has worked with Flaunt Magazine, Vice and Continuance Pictures.
        </p>
      </div>
      <div class="about-image-wrapper col-sm-6 order-0 order-md-2 shift-in">
        <img :data-src="aboutImageUrl" class="cld-responsive img-fluid" alt="About Image">
      </div>
    </div>
  </div>
</template>

<script>
import cloudinaryMixin from "@/cloudinaryMixin.js";

export default {
  name: "AboutView",
  mixins: [cloudinaryMixin],
  computed: {
    aboutImageUrl() {
      return this.$cloudinaryUrl('image', 'about.jpg', ['About']);
    },
  },
};
</script>

<style scoped>
  .about {
    margin: 1rem;
  }

  .about-image-wrapper {
    max-width: 375px;
  }

  .about-description {
    text-align: left;
    font-size: 1.35rem;
    padding-right: 3em;
  }

  .about-description p {
    text-transform: none;
    font-size: 19px;
  }

  @media screen and (max-width: 576px) {
    .about-description {
      font-size: 1.25em;
      margin-top: 1.25em;
      padding: 1em;
    }
    .about-image-wrapper {
      max-width: 300px;
    }
  }
</style>
