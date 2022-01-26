import Vue from 'vue'
import App from './App'
import detay from './screen/detay.vue'
import home from './screen/home.vue'
import category from './screen/category.vue'
import contact from './screen/contact.vue'
import about from './screen/about.vue'
import searchPost from './screen/searchPost.vue'
import VueRouter from 'vue-router'
import config from '../confing/confing.js'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'


import "./assets/css/bootstrap.css";
import "./assets/css/animate.css";
import "./assets/css/style.css";
// import "./assets/css/owl.carousel.min.css";
import "./assets/fonts/ionicons/css/ionicons.min.css";
import "./assets/fonts/fontawesome/css/font-awesome.min.css";
import "./assets/fonts/flaticon/font/flaticon.css";

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.prototype.$serviceUrl = config.API_URL
Vue.prototype.$imagesUrl = config.API_URL + 'FileService/downloadFile/'
Vue.prototype.$spinnerVisible = false ;

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/contact/', component: contact},
        {path: '/about/', component: about},
        {path: '/category/:id', component: category},
        {path: '/category/:id/:skip', component: category},
        {path: '/searchPost/:text', component: searchPost},
        {path: '/', component: home},
        {path: '/page/:skip', component: home},
        {path: '/:id', component: detay},
        // {path: '/yazi-detay/:id', component: PostDetail}
    ]
})

new Vue({
    created () {
        AOS.init()
     },
    router,
    render: h => h(App),
    store
}).$mount('#app')