<template>
    <div class="container-fluid">
        <div class="row first-row">
            <div class="col">
            </div>
        </div>
        <br>
        <div class="row">
            <img class="image-detail" :src="this.imgBanner" alt="First slide">
        </div>
        <br/>
        <div class="row">
            <div class="col">
                <h1 class="title-detail">{{title}}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p class="description">{{description}}</p>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col">
                <p>Monedas</p>
                <p class="coins">{{coins}}</p>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col">
                <p>Lugares</p>
                <p class="coins">{{sits}}</p>
            </div>
        </div>

        <br/>
        <div class="row">
            <div class="col">
                <p>Lugar</p>
                <p class="coins">{{city}}</p>
            </div>
        </div>

        <br/>
        <div class="row">
            <div class="col">
                <p>Fecha</p>
                <p class="coins">{{date}}</p>
            </div>
        </div>
        <br/>
        <div id="googleMap" style="width:100%;height:400px;"></div>

    </div>
</template>

<script>
    import Event from '../random/Event'
    import moment from 'moment'
    export default {
        name: "EventDetail",
        data(){
            return {
                imgBanner: '',
                title: '',
                description: '',
                coins: '',
                sits: '',
                city: '',
                date: '',
                mapName: 'google-map',
                mapCenter: {lat: 19.3234933, lng: -99.2188063},
                map: '',
                location:""
            }
        },
        mounted(){
            this.getEventDetail()

        },
        methods: {
            initMap(lat,lng){
                var mapProp= {
                    center:new google.maps.LatLng(lat,lng),
                    zoom:5,
                };
                var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

                var myLatLng = {lat: Number(lat), lng: Number(lng)};
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Hello World!'
                });
                /*
                this.map = new google.maps.Map(document.getElementById(this.mapName), {
                    center: this.mapCenter,
                    zoom: 14,
                    streetViewControl: false,
                    rotateControl: false,
                    mapTypeControl: false
                })

                 */
            },
            getEventDetail(){
                console.log(this.$route.params.id)
                Event.getEvent(this.$route.params.id).then(({data}) => {
                    console.log('data',data)
                    this.imgBanner = data[0].imgs.general
                    this.title = data[0].title
                    this.description = data[0].description
                    this.coins = data[0].coins
                    this.sits = data[0].sits
                    this.city = data[0].city
                    this.date = moment(data[0].date).format('DD-MM-YYYY')
                    this.location = data[0].location
                    this.initMap(this.location.lat,this.location.lng)
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    .container-fluid{
        width: 100%;
        min-height: 100vh;
    }
    .img-general{
        width: 100%;
        height: 500px;
    }
    .title{
        color: white;
    }
    .description {
        color: white;
        column-count: 2;
    }

    .first-row{
        height: 40px
    }

    .image-detail{
        height: 100vh;
        width: 100%;
    }

    .title-detail{
        color: white;
        font-size: 15px;
    }

    .coins{
        color: red;
    }
</style>
