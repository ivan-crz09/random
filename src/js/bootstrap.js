// :: Import Vue.js and make it available throughout the application
import Vue from 'vue'

window.Vue = Vue

// :: Use vue-router as main application's router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './routes'

window.router = router

// :: We'll be using axios as our HTTP request handler
//import axios from 'axios'

//window.axios = axios
