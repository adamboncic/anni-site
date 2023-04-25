<template>
  <a id="scroll-top" @click.prevent="scrollToTop"></a>
</template>

<script>
export default {
  name: 'ScrollToTop',
  mounted() {
    this.initScrollToTop();
  },
  methods: {
    initScrollToTop() {
      const scrollBtn = document.getElementById('scroll-top');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          scrollBtn.classList.add('show');
        } else {
          scrollBtn.classList.remove('show');
        }
      });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style>
  #scroll-top {
    display: inline-block;
    background-color: #FF9800;
    width: 50px;
    height: 50px;
    text-align: center;
    -webkit-border-radius:60px;
    border-radius:60px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    transition: background-color .3s, 
      opacity .5s, visibility .5s;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
    text-decoration: none;
  }

  #scroll-top::after {
    content: "\f077";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 1.25em;
    line-height: 50px;
    color: #FFF;
  }

  #scroll-top:hover {
    cursor: pointer;
    background-color: #333;
  }

  #scroll-top:active {
    background-color: #555;
  }

  #scroll-top.show {
    opacity: 1;
    visibility: visible;
  }
</style>