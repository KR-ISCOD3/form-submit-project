import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import router from './router/route.js'

createApp(App).use(router).mount('#app');

