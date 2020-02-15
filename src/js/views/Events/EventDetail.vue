<template>
    <div class="container-fluid">
        <div class="row first-image">
            <img class="image-detail" :src="this.imgBanner" alt="First slide">
        </div>
        <div class="row">
            <div class="col without-margin">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">EVENTO <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">ITINERARIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">BASES</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="title-detail">{{title}}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <p class="description">{{description}}</p>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-md-6 offset-md-2">
                <div id="googleMap" style="width:100%;height:400px;"></div>
            </div>
            <div class="col">
                <div class="info-detail">
                    <p>{{date}}</p>
                    <p>{{time}}</p>
                    <p>Cupo: {{sits}}</p>
                    <br/>
                    <p>{{coins}} randoms</p>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="row">
            <div class="col-md-8 offset-md-2">
                <button @click="comprar" class="bought">Comprar</button>
            </div>
        </div>
        <br/>
        <br/>
    </div>
</template>
<script>
    import Event from '../../random/Event'
    import User from '../../random/User'
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
                time: '',
                mapName: 'google-map',
                mapCenter: {lat: 19.3234933, lng: -99.2188063},
                map: '',
                location:"",
                user: ""
            }
        },
        mounted(){
            console.log("mounted",store.getters.user)
            this.user = store.getters.user
            this.getEventDetail()

        },
        methods: {
            comprar(){
              console.log(this.coins,"monedas")
              console.log(store.getters.user)
              let user = store.getters.user
              user.coins = user.coins - this.coins
              store.commit('setUser', user)
                User.discountCoins(user._id).then((data)=>{
                    console.log(data,'dataaaaasaa')
                }).catch(err => {
                    console.log('errorrrrr',err)
                })
            },
            initMap(lat,lng){
                var mapProp= {
                    center:new google.maps.LatLng(lat,lng),
                    zoom:10,
                };
                var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

                var myLatLng = {lat: Number(lat), lng: Number(lng)};
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Hello World!'
                });
                directionsDisplay.setMap(map);
                this.plotItineraryRoute(myLatLng,directionsDisplay)
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
            plotItineraryRoute(myLatLng,directionsDisplay) {

                var start = myLatLng;
                var end = {lat: Number(17.0681228), lng: Number(-96.7195192)};
                var waypts = [];

                var request = {
                    origin: start,
                    destination: end,
                    waypoints: waypts,
                    optimizeWaypoints: false,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
                var directionsService = new google.maps.DirectionsService();
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }else{// if (status == google.maps.DirectionsStatus.OK) {
                        //error from google
                    }
                });

            },
            getEventDetail(){
                console.log(this.$route.params.id)
                Event.getEvent(this.$route.params.id).then(({data}) => {
                    console.log('data',data)
                    this.imgBanner = data.imgs.general
                    this.title = data.title
                    this.description = data.description
                    this.coins = data.coins
                    this.sits = data.sits
                    this.city = data.city
                    this.date = moment(data.date).format('DD/MM/YYYY')
                    this.time = moment(data.date).format('HH:ss')
                    this.location = data.location
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
        font-family: "GothamBook"
    }
    .description {
        color: white;
        column-count: 2;
        font-family: "GothamBook";
        font-size: 15px;
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
        font-family: "GothamBook";
        font-weight: bold;
    }

    .coins{
        color: red;
    }

    .info-detail{
        color: white;
        font-family: "Trade Gothic";
        margin-left: 20px;
        margin-top: 15px;
    }

    .info-detail p{
        margin-bottom: 0;
    }

    .without-margin {
        padding: 0;
    }

    .navbar {
        padding: 0;
        background-color: #252525 !important;
    }

    .nav-link{
        color: white !important;
    }

    .nav-item.active{
        background-color: red;
        width: 72px;
    }

    #navbarNav{
        margin-left: 35px;
    }

    a{
        font-size: 9px;
        font-weight: bold;
        margin-top: 7px;
        margin-left: 8px;
    }

    .bought{
        background-color: red;
        border-radius: 20px;
        color: white;
        font-family: "Trade Gothic";
        font-weight: bold;
        font-style: italic;
        border: none;
        width: 146px;
    }

    .first-image{
        margin-top: -94px;
    }
</style>
