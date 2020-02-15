<template>
    <div class="container-fluid">
        <sliderEvent></sliderEvent>
        <div class="row">
            <div class="col-md-2 filters">
                <h1 class="mt-4 filter-event">FILTROS</h1>
                <br/>
                <select @change="getData" name="select" class="select-filter" v-model="filter.sport">
                    <option disabled value="">Deporte</option>
                    <option v-for="option in optionsSport" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
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
            <div class="col-md-10 quit-padding">
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
                    <template v-for="index in data2">
                        <div class="row">
                            <div class="col">
                                <div class="flex-container">
                                    <div class="d-flex flex-column">
                                        <div @click="redirectEvent(index._id)">
                                            <img :src="index.imgs.general"  alt="Girl in a jacket" width="200px" height="200px">
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column">
                                        <div class="event-info">
                                            <p class="event-info-date">{{formatDate(index.date)}}</p>
                                            <p class="event-info-title">{{index.title}}</p>
                                            <p class="event-info-estate">{{index.city}}</p>
                                        </div>

                                    </div>
                                </div>
                                <hr class="add-hr"/>
                            </div>
                            <!--
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
                            -->
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Home from '../../random/Home'
    import InfiniteLoading from 'vue-infinite-loading';
    import Event from '../../random/Event'
    import moment from 'moment'
    export default {
        name: "Events",
        data(){
            return{
                sliders:[],
                data:[1,2,3,4],
                data2: [],
                busy: false,
                page: 0,
                optionsSport: [
                    { text: 'Ciclismo', value: 1 },
                    { text: 'Acuáticos', value: 2 },
                    { text: 'Montaña', value: 3 }
                ],
                filter: {
                    sport: ""
                }
            }
        },
        mounted(){
            //this.chargeSlider()
        },
        components: {
            InfiniteLoading,
            'sliderEvent': require('../../components/Events/SliderEvents').default
        },
        methods: {
            redirectEvent(index){
                //alert('redirectEvent')
                router.push({ name: 'eventDetail', params: { id: index} })
            },
            formatDate(date){
                return moment(date).lang("es").format('DD MMMM YYYY');
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
                console.log('aquiiiiiii')
                Home.getAllSlider().then(({data}) => {
                    this.sliders = data
                    console.log("sliders",data)
                }).catch(err => {
                    console.log(err)
                })
            },
            getData(){
                console.log(this.filter.sport)
                let filter = this.filter.sport
                let paginate = 0
                Event.getPaginate(paginate,filter).then(({data}) => {
                    console.log('data',data)
                    this.data2 = []
                    data.forEach((info)=>{
                        this.data2.push(info)
                    })
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
    //        box-shadow: 0 18px 13px 15px #8C8B90
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
        font-size: 15px;
        font-weight: 100;
        font-family: "Trade Gothic";
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

    .filter-event{
        color: black;
        font-family: "Trade Gothic";
        font-size: 45px;
        font-weight: bold;
        letter-spacing: 4px;
    }

    .flex-container {
        display: flex;
        background-color: white;
    }

    .quit-padding{
        padding: 0;
    }

    .add-hr{
        margin-top: -1px;
        margin-bottom: 0px;
        height: 1px;

    }

    .event-info{
        margin-left: 35px;
        margin-top: 42px;
    }

    .event-info p{
        text-transform: uppercase;
        margin-bottom: 1px;
    }

    .event-info-date {
        color: red;
        font-size: 12px;
        font-family: "Trade Gothic";
    }

    .event-info-title {
        font-family: "Trade Gothic";
        font-weight: bold;
        font-size: 30px;
        letter-spacing: 1px;
    }

    .event-info-estate {
        margin-top: -10px;
        font-family: "Trade Gothic";
        font-size: 12px;
    }

</style>
