<template>
    <div class="container-fluid">
        <div class="row">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <template v-for="(slide,index) in sliders">
                        <li data-target="#carouselExampleIndicators" :data-slide-to="index" ></li>
                    </template>
                </ol>
                <div class="carousel-inner">
                    <template v-for="(slide,index) in sliders">
                        <template v-if="index==0">
                            <div class="carousel-item active">
                                <img class="d-block w-100" :src="slide.url" :alt="index">
                            </div>
                        </template>
                        <template v-else>
                            <div class="carousel-item">
                                <img class="d-block w-100" :src="slide.url" :alt="index">
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
        </div>
        <div class="row">
            <div class="col-md-2 filters">
                <h1 class="mt-4">Filtros</h1>
                <br/>
                <select name="select" class="select-filter">
                    <option value="value1" selected>Deporte</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
                <br/>
                <br/>
                <br/>
                <select name="select" class="select-filter">
                    <option value="value1" selected>Ciudad</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
                <br/>
                <br/>
                <br/>
                <select name="select" class="select-filter">
                    <option value="value1" selected>Año</option>
                    <option value="value2" >Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
                <br/>
                <br/>
                <br/>
                <select name="select" class="select-filter">
                    <option value="value1" selected>Mes</option>
                    <option value="value2" >Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </div>
            <div class="col-md-10">
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                    <template v-for="index in data2">
                        <div class="row">
                            <div class="col-md-2 info-col">
                                <div @click="redirectEvent(index._id)">
                                    <img :src="index.imgs.general"  alt="Girl in a jacket" width="100%" height="200px">
                                </div>
                            </div>
                            <div class="col-md-10 info-col">
                                <p class="date-info">{{formatDate(index.date)}}</p>
                                <div class="title-info">
                                    <p>{{index.title}}</p>
                                    <p class="title-city">{{index.city}}</p>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Home from '../random/Home'
    import InfiniteLoading from 'vue-infinite-loading';
    import Event from '../random/Event'
    import moment from 'moment'
    export default {
        name: "Events",
        data(){
            return{
                sliders:[],
                data:[1,2,3,4],
                data2: [],
                busy: false,
                page: 0
            }
        },
        mounted(){
            this.chargeSlider()
        },
        components: {
            InfiniteLoading,
        },
        methods: {
            redirectEvent(index){
                //alert('redirectEvent')
                router.push({ name: 'eventDetail', params: { id: index} })
            },
            formatDate(date){
                console.log(date,"date")
                return moment(date).format('DD-MM-YYYY');
            },
            loadMore() {
                this.busy = true;

                    this.chargeEvents(this.page)
                    this.busy = false;
                    this.page++

                /*
                Event.getPaginate().then(({data}) => {
                    console.log('data',data)
                    this.data2 = data
                }).catch(err => {
                    console.log(err)
                })

                 */
            },
            chargeEvents(paginate){
                Event.getPaginate(paginate).then(({data}) => {
                    console.log('data',data)
                    data.forEach((info)=>{
                        this.data2.push(info)
                    })
                }).catch(err => {
                    console.log(err)
                })
            },
            chargeSlider(){
                Home.getAllSlider().then(({data}) => {
                    this.sliders = data
                    console.log("sliders",data)
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    .carousel-item {
        height: 600px !important;
    }

    .filters{
        background-color: red;
        min-height: 600px;
    }

    .select-filter{
        width: 100%;
        border-top-style: none;
        background-color: transparent;
        border-right-style: none;
        border-left-style: none;
        border-bottom-color: black;
    }

    .info-col{
        background-color: white;
        padding:0
    }

    .img-col {
        padding: 0;
    }

    .date-info{
        color:red;
        margin-top: 60px;
        margin-left:30px;
    }

    .title-info{
        color:black;
        margin-left:30px;
    }

    .title-city{
        margin-top: 10px;
    }

</style>
