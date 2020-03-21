<template>
    <div class="row no-gutters events" v-if="banners.length">
        <div class="col">
            <div class="images-banner flex-container">
                <template v-for="(banner, index) in banners">
                    <div :class="[`imgIcon${index} image-banner`]"  :key="index">
                            <img class="imgBanner" :src="banner.event.imgs.banner" alt="First slide">
                    </div>
                </template>
            </div>
            <!--
            <div class="flex-container">
                <div class="d-flex flex-column">
                    <template v-for="(numberBanner,index) in [0,3,6]">
                        <div @click="redirectEvent(numberBanner)">
                            <img :class="banners[numberBanner].class" :src="banners[numberBanner].event.imgs.banner" alt="First slide">
                            <p class="event-title">{{getTitleFormat(banners[numberBanner].event.title)}}</p>

                        </div>
                    </template>
                </div>
                <div class="d-flex flex-column">
                    <template v-for="(numberBanner,index) in [1,4,7]">
                        <div @click="redirectEvent(numberBanner)">
                            <img :class="banners[numberBanner].class" :src="banners[numberBanner].event.imgs.banner" alt="First slide">
                            <p class="event-title">{{getTitleFormat(banners[numberBanner].event.title)}}</p>
                        </div>
                    </template>
                </div>
                <div class="d-flex flex-column">
                    <template v-for="(numberBanner,index) in [2,5,8]">
                        <div @click="redirectEvent(numberBanner)">
                            <img :class="banners[numberBanner].class" :src="banners[numberBanner].event.imgs.banner" alt="First slide">
                            <p class="event-title">{{getTitleFormat(banners[numberBanner].event.title)}}</p>
                        </div>
                    </template>
                </div>
            </div>
            -->
        </div>
    </div>
</template>

<script>
    import Banner from '../../random/Banner'
    export default {
        name: "Banner",
        data() {
            return {
                banners: []
            }
        },
        created(){
            this.chargeEvents()
        },
        methods: {
            redirectEvent(index){
                let id = this.banners[index].event._id
                console.log("banner",this.banners[index])
                console.log('idddddddddd',id)
                //alert('redirectEvent')
                router.push({ name: 'eventDetail', params: { id: id} })
            },
            chargeEvents(){
                Banner.getAll().then(({data}) => {
                    let banners = data
                    banners.sort(function(a, b) {
                        return Number(a.position) - Number(b.position);
                    })
                    this.banners = data
                    let first = this.banners[0]
                    console.log(this.banners)
                }).catch(err => {
                    console.log(err)
                })
            },
            getTitleFormat(title){
                let arrayTitle=title.split(" ", 3);
                let formatArray = ""
                arrayTitle.forEach((titleArray) => {
                    formatArray += `${titleArray}\n`
                })
                return formatArray
            }
        }
    }
</script>

<style scoped>
    .flex-container {
        display: flex;
        justify-content: center;
    }

    /* columna 1 */
    .banner-one {
        width: 307px;
        height: 400px;
        border-radius: 15px;
        margin: 10px;
    }

    .banner-four {
        width: 307px;
        height: 569px;
        margin: 10px;
        border-radius: 15px;
    }

    .banner-seven {
        width: 307px;
        height: 500px;
        margin: 10px;
        border-radius: 15px;
    }

    /* columna 2 */

    .banner-two {
        width: 307px;
        height: 664px;
        margin: 10px;
        border-radius: 15px;
    }

    .banner-five {
        width: 307px;
        height: 508px;
        margin: 10px;
        border-radius: 15px;
    }

    .banner-eight {
        width: 307px;
        height: 490px;
        margin: 10px;
        border-radius: 15px;
    }


    /* columna 3 */
    .banner-three {
        width: 307px;
        height: 489px;
        margin: 10px;
        border-radius: 15px;
    }

    .banner-six {
        width: 307px;
        height: 500px;
        margin: 10px;
        border-radius: 15px;
    }

    .banner-nine {
        width: 307px;
        height: 465px;
        margin: 10px;
        border-radius: 15px;
    }

    .events-figcaption{
        margin-right: 1px;
        background-color: white;
    }

    .title-figcaption{
        margin-bottom: 0px;
        font-weight: bold;
    }

    .event-title{
        margin-top: -100px;
        margin-left: 19px;
        position: absolute;
        font-weight: bold;
        color: white;
        white-space:pre
    }



    .images-banner img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }




    .image-banner{
        width:27%;
        margin-bottom: 2%;
        text-align: center;
        text-align: -webkit-center;
    }


    .flex-container{
        display: flex;
        flex-wrap: wrap;
        margin-left: 2%;
        margin-right: 2%;
        margin-top: 3%;
    }

    .image-banner > img {
        border-radius: 15px;
    }

    .imgIcon0{
        height: 400px;
    }

    .imgIcon1{
        height: 664px;
    }

    .imgIcon2{
        height: 489px;
    }

    .imgIcon3{
        margin-top: -270px;
        height: 569px;
    }

    .imgIcon4{
        height: 508px;
        margin-top: -10px;
    }

    .imgIcon5{
        height: 500px;
        margin-top: -180px;
    }

    .imgIcon6{
        height: 500px;
        margin-top: -205px;
    }

    .imgIcon7{
        height: 490px;
        margin-top: -10px;
    }

    .imgIcon8{
        height: 465px;
        margin-top: -180px;
    }

    .imgIcon0, .imgIcon3, .imgIcon6  {
    /* your styles */
        margin-right: 15px;
    }

    .imgIcon2, .imgIcon5, .imgIcon8  {
    /* your styles */
        margin-left: 15px;
    }

    @media only screen and (max-width: 1000px ) {
        .events{
            background-color: green;
        }

        .flex-container{
            display: flex;
            flex-wrap: wrap;
            margin-left: 2%;
            margin-right: 2%;
            margin-top: 3%;
        }

        .image-banner{
            width:49%;
            margin-bottom: 3%;
            height: 400px;
            margin-top: 0px;
            margin-right: 0px;
            margin-left: 0px;
        }

        .image-banner > img {
            border-radius: 15px;
        }

       .imgIcon0{
            height: 400px;
        }

        .imgIcon1{
            margin-right: 0%;
        }

        .imgIcon0, .imgIcon2, .imgIcon4, .imgIcon6 {
            margin-right: 2%;
        }

        .imgIcon8{
            width: 100%;
        }


    }

    @media only screen and (max-width: 650px ) {
        .events{
            background-color: blue;
        }

        .flex-container{
            display: flex;
            flex-wrap: wrap;
            margin-left: 2%;
            margin-right: 2%;
        }

        .image-banner{
            width:100%;
            margin-bottom: 5%;
        }

        .image-banner > img {
            border-radius: 15px;
        }

        .imgIcon0{
            margin-top: 5%;
            margin-right: 0%;
        }



        /*
        .imgIcon0{
            padding-top: 5%;
        }

        .images-banner{
            padding-left: 5%;
            padding-right: 5%;
        }

        .allimages{
            width: 100%;
            height: 85vh;
            margin-bottom: 10%;
        }
        
        .imgBanner{
            object-fit: cover;
            border-radius: 30px;
        }
        */

    

    }

</style>
