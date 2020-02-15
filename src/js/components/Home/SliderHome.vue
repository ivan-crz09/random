<template>
    <div class="row">
        <swiper :options="swiperOption" ref="mySwiper">
            <template v-for="(slide,index) in sliders">
                <template v-if="slide.event.video=='' ">
                    <swiper-slide>
                        <router-link class="nav-link text-white mr-5" :to="`event/${slide.event._id}`"><img class="d-block w-100" :src="slide.event.imgs.general" :alt="index"></router-link>
                    </swiper-slide>
                </template>
                <template v-else>
                    <swiper-slide>
                        <iframe width="100%" height="100%" :src="`https://www.youtube.com/embed/${slide.event.video}`"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </swiper-slide>

                </template>
            </template>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <hr class="hr-welcome">
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Slider",
        components: {
            'bannerVue': require('../components/Home/Banner').default,
            'membership': require('../components/Home/Membership').default,
            'partners': require('../components/Home/Partners').default,
            swiper,
            swiperSlide
        },
        data(){
            return {
                banners: [],
                sliders:[],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    slidesPerView: 1,
                    paginationClickable: false,
                    lazyLoading: true
                },
            }
        },
        created(){
            this.chargeSlider()
        },
        methods:{
            chargeSlider(){
                Home.getAllSlider().then(({data}) => {
                    this.sliders = data
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>
