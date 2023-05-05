<template>
  <div class="photography">
    <div class="grid-wrapper">
      <div>
        <img :data-src="getImageUrl('Italy_13_qxhpg9')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Friend_1_qljgke')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Friend_8_xwnqqc')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Anni_1_t0ty5u')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Friend_2_suwff6')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Anni_2_pwzpeq')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Home_1_dzvvpg')" class="cld-responsive" />
      </div>
      <div class="wide">
        <img :data-src="getImageUrl('0009_W_bwdmel')" class="cld-responsive" />
      </div>
      <div class="wide">
        <img :data-src="getImageUrl('0006_W_glnkrj')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Anne_1_uh7foc')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_8_qufyxj')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_3_mhjoac')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Home_2_xpj0ww')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Friend_3_ba38ib')" class="cld-responsive" />
      </div>
      <div class="wide">
        <img :data-src="getImageUrl('0001_W_hszzbv')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_13_qxhpg9')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Friend_9_xc7t6v')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Home_3_vez6ba')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_9_xxraoo')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_4_c9jymx')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_7_m72jfw')" class="cld-responsive" />
      </div>
      <div class="wide">
        <img :data-src="getImageUrl('0002_W_mufvbt')" class="cld-responsive" />
      </div>
      <div class="wide">
        <img :data-src="getImageUrl('0003_W_xvmq75')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_12_kgiabt')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_11_o4pmvh')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_2_omtv2x')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Trist_3_oeh0yv')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('view_1_ujn58u')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_1_a0t0yx')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_10_jdnnyk')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Hudson_1_vf1nke')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Trist_1_t6whpu')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_5_uxbvmp')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Party_1_cl05kl')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Friend_5_ehy3er')" class="cld-responsive" />
      </div>
      <div class="wide">
        <img :data-src="getImageUrl('0007_W_wxvgur')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('AT_1_jg71ll')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Friends_1_h4imwe')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Park_1_gvc8jt')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Italy_6_pxmi14')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Party_2_aeukee')" class="cld-responsive" />
      </div>
      <div>
        <img :data-src="getImageUrl('Party_3_aatpzv')" class="cld-responsive" />
      </div>
    </div>
  </div>
</template>

<script>
import cloudinaryMixin from "@/cloudinaryMixin.js";

export default {
  name: "PhotographyView",
  mixins: [cloudinaryMixin],
  data() {
    return {
      subFolders: ["Photography"],
    };
  },
  methods: {
    getImageUrl(fileName) {
      return this.$cloudinaryUrl("image", fileName, this.subFolders);
    },
  },
};
</script>

<style scoped>
  .grid-wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
  }

  .grid-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
  }

  .wide {
    grid-column: span 2;
  }

  .tall {
    grid-row: span 2;
  }

  .big {
    grid-column: span 2;
    grid-row: span 2;
  }

  @media (max-width: 900px) {
    .grid-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
}
</style>
