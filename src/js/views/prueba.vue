<template>
    <div class="container-fluid">
        <p>hola prueba</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="row">
            <div class="col-md-5">
                <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide>
                        <div class="instruction-card">
                            <div class="circle">
                            </div>
                            <h3 class="step-title">Dinos tu dirección
                                de entrega</h3>
                            <p class="step-description">Ingresa tu ubicación y
                                nuestros prixzers te llevaran
                                tus medicamentos hasta
                                donde estés.</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="instruction-card">
                            <div class="circle">
                            </div>
                            <h3 class="step-title">Realiza tu pedido</h3>
                            <p class="step-description">Busca el medicamento que
                                necesites y compra seguro y
                                fácil a través de Prixz.</p>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="instruction-card">
                            <div class="circle">
                            </div>
                            <h3 class="step-title">Siéntete mejor en
                                menos de una hora</h3>
                            <p class="step-description">
                                Nuestros prixzers recogerán  de la farmacia lo que pediste y estarán en tu
                                domicilio en menos de una hora.
                            </p>
                        </div>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        name: "prueba",
        data(){
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    slidesPerView: 1
                }
            }
        },
        mounted(){
        }
    }
</script>

<style scoped>

</style>
