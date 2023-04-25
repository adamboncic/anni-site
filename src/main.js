import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './global'
import 'bootstrap'
import VueLazyload from 'vue-lazyload'
import VueEasyLightbox from 'vue-easy-lightbox'
import ImageLightbox from './components/photography/ImageLightbox.vue'

// Import Components
import BackButton from './components/common/BackButton.vue'
// Import Bootstrap CSS and Bootstrap Icons CSS (optional)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Custom css
import './assets/styles/main.css'

const app = createApp(App)

// Assign components
app.component('BackButton', BackButton)
app.component('ImageLightbox', ImageLightbox)

// Cloudinary setup
function generateCloudinaryUrl(type, publicId, folders = []) {
  const baseUrl = "https://res.cloudinary.com/donw61g6t"
  const version = "v1682042642"
  const baseFolder = "AnnikaChavez"
  const folderPath = [baseFolder, ...folders].join('/')
  return `${baseUrl}/${type}/upload/${version}/${folderPath}/${publicId}`
}

app.config.globalProperties.$cloudinaryUrl = generateCloudinaryUrl

app.use(VueLazyload)
app.use(VueEasyLightbox)

app.use(router).mount('#app')