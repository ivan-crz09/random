// :: Import Vue.js and make it available throughout the application
import Vue from 'vue'

window.Vue = Vue

import store from './store'
window.store = store

// :: Use vue-router as main application's router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './routes'

window.router = router

// :: We'll be using axios as our HTTP request handler
import axios from 'axios'
window.axios = axios


import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

// :: Import the website's configuration parameters, make the object globally available
import config from './config'
window.config = config
