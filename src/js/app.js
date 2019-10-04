import './bootstrap'

Vue.component('nav-header', require('./components/Header.vue').default)
Vue.component('vue-footer', require('./components/Footer.vue').default)

window.app = new Vue({
    // :: Bind Vue to element with ID 'app'
    el: '#app',
    // :: Use v-router
    router,
    data() {
        return {
        }
    },
    created(){

    },
    mounted() {
        console.log('mounted first without routes')
    }
});
