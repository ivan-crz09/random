<template>
    <div class="row events" v-if="banners.length">
        <div class="col">
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
</style>
