<template>
  <div class="directing">
    <div class="row">
      <div class="col-sm-12">
        <!-- Reel -->
        <div class="directing-reel">
          <video controls muted autoplay loop playsinline>
            <source :src="directingReel" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
      <!-- Directing Links -->
      <div class="directing-nav">
          <div>
            <router-link class="directing-link"  to="directing/narrative">
              Narrative
            </router-link>
          </div>

          <div>
            <router-link class="directing-link" to="directing/music-video">
              Music Video
            </router-link>
          </div>

          <div>
            <router-link class="directing-link" to="directing/commercial">
              Commercial
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DirectingView',
    data() {
      return {}
    },
    computed: {
      directingReel() {
        return this.$cloudinaryUrl('video', 'reel.mp4', ['Directing', 'Reel'])
      },
    },
  }
</script>

<style scoped>
  .directing-reel {
    text-align: center;
    margin-bottom: 3em;
  }

  .directing-reel video {
    width: 90%;
    height: auto;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    .directing-reel video {
        width: 100%;
    }
    .directing-nav {
      flex-direction: column;
    }
  }
</style>
