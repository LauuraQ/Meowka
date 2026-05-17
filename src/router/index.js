import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import ParserPage from '../views/ParserPage.vue'
import CrosslinkPage from '../views/CrosslinkPage.vue'
import ListsPage from '../views/ListsPage.vue'
import StringEditorPage from '../views/StringEditorPage.vue'
import AdressFormatorPage from '../views/AdressFormatorPage.vue'
import ImageConverterPage from '../views/ImageConverterPage.vue'
import ImageProcessorPage from '../views/ImageProcessorPage.vue'
import ImageModificatorPage from '../views/ImageModificatorPage.vue'
import LogoPage from '../views/LogoPage.vue'
import FillerPage from '../views/FillerPage.vue'
import MultiFillerPage from '../views/MultiFillerPage.vue'

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/about', component: AboutPage, name: 'about' },
    { path: '/contact', component: ContactPage, name: 'contact' },

    { path: '/parser', component: ParserPage, name: 'parser' },
    { path: '/crosslink', component: CrosslinkPage, name: 'crosslink' },
    { path: '/lists', component: ListsPage, name: 'lists' },

    { path: '/string-editor', component: StringEditorPage, name: 'string-editor' },
    { path: '/adress-formator', component: AdressFormatorPage, name: 'adress-formator' },

    { path: '/image-converter', component: ImageConverterPage, name: 'image-converter' },
    { path: '/image-processor', component: ImageProcessorPage, name: 'image-processor' },
    { path: '/image-modificator', component: ImageModificatorPage, name: 'image-modificator' },
    { path: '/logo', component: LogoPage, name: 'logo' },

    { path: '/filler', component: FillerPage, name: 'filler' },
    { path: '/multi-filler', component: MultiFillerPage, name: 'multi-filler' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
