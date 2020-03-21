import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {
        path: '/',
        name:"welcome",
        component: require('./views/Welcome2.vue').default,
        meta: {title: ' Random :: Inicio'}
    },
    {
        path: '/w',
        name:"welcome2",
        component: require('./views/Welcome.vue').default,
        meta: {title: ' Random :: Inicio'}
    },
    {
        path: '/prueba',
        name:"prueba",
        component: require('./views/prueba.vue').default,
        meta: {title: ' Random :: Prueba'}
    },
    {
        path: '/login',
        name:"login",
        component: require('./views/Loginv3.vue').default,
        meta: {title: ' Random :: Login'}
    },
    {
        path: '/events',
        name:"events",
        component: require('./views/Events/Events.vue').default,
        meta: {title: ' Random :: Eventos'}
    },
    {
        path: '/event/:id',
        name:"eventDetail",
        component: require('./views/Events/EventDetail.vue').default,
        meta: {title: ' Random :: Detalle del Evento'}
    },
    {
        path: '/contact',
        name:"contact",
        component: require('./views/Contact/Contact.vue').default,
        meta: {title: ' Random :: Contacto'}
    },
    {
        path: '/coins',
        name:"coins",
        component: require('./views/Coins/Coins.vue').default,
        meta: {title: ' Random :: Monedas'}
    },
    {
        path: '/membership',
        name:"membership",
        component: require('./views/Membership/Membership.vue').default,
        meta: {title: ' Random :: Membresía'}
    },
    {
        path: '/register',
        name:"register",
        component: require('./views/Register.vue').default,
        meta: {title: ' Random :: Registro'}
    }

]

// :: Instantiate router
const vRouter = new VueRouter({
    //mode: 'history',
    routes
})

export default vRouter
