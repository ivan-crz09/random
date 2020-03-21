<template>
    <div class="container-fluid">
        <sliderHome></sliderHome>
        <br/>
        <banner-vue></banner-vue>
        <br/>
        <br/>
        <br/>
        <membership></membership>
        <partners></partners>
            <!--
            <div id="carouselExampleIndicators" class="carousel" >
                <ol class="carousel-indicators">
                    <template v-for="(slide,index) in sliders">
                        <li data-target="#carouselExampleIndicators" :data-slide-to="index" ></li>
                    </template>
                </ol>
                <div class="carousel-inner">
                    <template v-for="(slide,index) in sliders">
                        <template v-if="index==0">
                            <div class="carousel-item active">
                                <template v-if="slide.event.video=''">
                                    <router-link class="nav-link text-white mr-5" :to="`event/${slide.event._id}`"><img class="d-block w-100" :src="slide.event.imgs.general" :alt="index"></router-link>
                                </template>
                                <template v-else>
                                    <div class="video">
                                        <iframe src="https://player.vimeo.com/video/93292237?api=1&wmode=transparent"
                                                frameborder="0" allowfullscreen data-autoplay="1"></iframe>
                                    </div>
                                </template>
                            </div>
                        </template>
                        <template v-else>
                            <div class="carousel-item">
                                <router-link class="nav-link text-white mr-5" :to="`event/${slide.event._id}`"><img class="d-block w-100" :src="slide.url" :alt="index"></router-link>
                            </div>
                        </template>
                    </template>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <hr class="hr-welcome">
        </div>
        -->
        <!--
        <br/>
        <bannerVue></bannerVue>
        <br/>
        <br/>
        <br/>
        <membership></membership>
        <partners></partners>
        -->
    </div>
</template>

<script>
    import Banner from '../random/Banner'
    export default {
        name: "Welcome",
        data(){
            return {
                banners: [],
                sliders:[]
            }
        },
        created(){
        },
        components: {
            'bannerVue': require('../components/Home/Banner').default,
            'membership': require('../components/Home/Membership').default,
            'partners': require('../components/Home/Partners').default,
            'sliderHome': require('../components/Home/SliderHome').default
        }
    }
</script>

<style scoped>

    nav {
        position: absolute;
    }

    a{
        margin-right: 0 !important;
        padding: 0;
    }

</style>
