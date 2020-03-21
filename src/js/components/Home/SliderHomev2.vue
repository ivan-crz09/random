<template>
    <div class="row no-gutters">
        <p>Prueba</p>
        <hr class="hr-welcome"> 
    </div>
<!--
    <div>
        <a @click.prevent="slidePrev"><i class="fa fa-angle-left leftSlide"></i></a>
        <a @click.prevent="slideNext"><i class="fa fa-angle-right rightSlide"></i></a>
        <!- -<div class="background-grey"></div>- ->
        <div class="gradient-bg">
            <hooper ref="carousel" :mouseDrag="false" :touchDrag="false" :wheelControl="false">
                <!- -
                <slide>
                    <div>
                        <video class="videoSample" id="bgVideo" preload="true" autoplay loop muted>
                            <source src="/public/video/sampleVideo.mp4" type="video/mp4" > 
                        </video>
                    </div>
                </slide>
                - ->
                <slide v-for="(slide,index) in slides" :key="index" :index="index">
                    <img class="d-block w-100 img-slider" :src="slide.event.imgs.general" :alt="index">
                </slide>
            </hooper>
        </div>
    </div>
-->
</template>
<script>
import Home from '../../random/Home'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    components: {
        Hooper,
        Slide,
        HooperNavigation
    },
    data() {
      return {
            slides:[],
            countImage:0,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                shortDrag: false,
                slidesPerView: 1,
                paginationClickable: false,
                lazyLoading: true
            },
        }
    },
    mounted(){
        this.chargeSlider()
    },
    methods: {
        chargeSlider(){
            Home.getAllSlider().then(({data}) => {
                this.slides = data
                //this.countLeft = this.slides.length-1
            }).catch(err => {
                console.log(err)
            })
        },
        slidePrev(){
            this.$refs.carousel.slidePrev();
            /*
            console.log(this.countLeft,"izq")
            if(this.countImage==0){
                alert('primero desactivado')
            }else{
                this.countImage--
            }
            */
        },
        slideNext(){
            this.$refs.carousel.slideNext();
            /*
            if(this.countImage==this.slides.length-1){
                alert('ultimo desactivado')
            }else{
                this.countImage++
            }
            */
        }
    }
}
</script>
<style scoped>
    .row{
        background-color: green;
        height: 80vh;
    }


    .hr-welcome{
        background-color: #f90202;
        margin: 0;
        height: 5px;
        position: absolute;
        bottom: 0;
        width: 100%;
    }









    .hooper {
        height: 100vh;
    }
    .hooper-slide {
        background-color: #62caaa;
        padding: 0px;
        display: flex;
        color: #fff;
        font-size: 30px;
    }



    .background-grey{
        height: 70vh;
        width: 100%;
        position: absolute;
        background: linear-gradient(to bottom,rgba(0,15,30,0),rgba(0,15,30,.38) 44%,rgba(0,15,30,.67));
    }

    .gradient-bg {
        max-width: 100%; 
        margin: auto;
    }
    
    .gradient-bg::after {
        display: block;
        position: relative;
        background: linear-gradient(to bottom,rgba(0,15,30,0),rgba(0,15,30,.38) 44%,rgba(0,15,30,.67));
        margin-top: -150px;
        height: 150px;
        width: 100%;
        content: '';
    }

    .leftSlide{
        color: white;
        font-size: 61px;
        position: absolute;
        top: 28%;
        left: 1%;
        z-index: 1;
        cursor: pointer;
    }

    .rightSlide{
        color: white;
        font-size: 61px;
        position: absolute;
        top: 28%;
        right: 6%;
        z-index: 1;
        cursor: pointer;
    }

    .img-slider{
        object-fit: cover;
    }


    @media only screen and (max-width: 650px ) {
        
    }




</style>