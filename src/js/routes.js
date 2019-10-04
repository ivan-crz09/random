import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        name:"welcome",
        component: require('./views/Welcome.vue').default,
        meta: {title: ' Random :: Inicio'}
    }

]

// :: Instantiate router
const vRouter = new VueRouter({
    //mode: 'history',
    routes
})

export default vRouter
