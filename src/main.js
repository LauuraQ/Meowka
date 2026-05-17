import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

import router from './router'
import swiperDirective from './directives/swiper.js'


createApp(App)

    .directive('swiper', swiperDirective)
    .use(router)
    .mount('#app')