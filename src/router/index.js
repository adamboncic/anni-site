import { createRouter, createWebHistory } from 'vue-router';

// Import views
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';

import Directing from '@/views/DirectingView.vue';
import Narrative from '@/views/NarrativeView.vue';
import MusicVideo from '@/views/MusicVideoView.vue';
import Commercial from '@/views/CommercialView.vue';
import Bolognese from '@/views/BologneseView.vue';
import Helium from '@/views/HeliumView.vue';
import BadJewGoodGirl from '@/views/BadJewGoodGirlView.vue';

import Photography from '@/views/PhotographyView.vue';
import Contact from '@/views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/directing',
    name: 'Directing',
    component: Directing,
  },
  {
    path: '/directing/narrative',
    name: 'Narrative',
    component: Narrative,
  },
  {
    path: '/directing/narrative/bolognese',
    name: 'Bolognese',
    component: Bolognese,
  },
  {
    path: '/directing/narrative/helium',
    name: 'Helium',
    component: Helium,
  },
  {
    path: '/directing/narrative/bad-jew-good-girl',
    name: 'BadJewGoodGirl',
    component: BadJewGoodGirl,
  },
  {
    path: '/directing/commercial',
    name: 'Commercial',
    component: Commercial,
  },
  {
    path: '/directing/music-video',
    name: 'MusicVideo',
    component: MusicVideo,
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;