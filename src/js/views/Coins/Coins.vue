<template>
    <div class="container-fluid">
        <div class="row">
            <img class="first-coin" :src="getMainImageCoin()" alt="First slide">
        </div>
        <div class="row coins">
            <template v-for="(packageCoin,index) in coins">
                <div class="col cardCoin" :key="index">
                   <!--{{packageCoin.coins}}-->
                       <img :class="[`imgIcon${index}`]" :src="getImageCoin(index)">
                       <p class="titleCoin">{{packageCoin.coins}}<span>MONEDAS</span></p>
                       
                </div>
            </template>
            <!--
            <div class="col">
                1
            </div>
            <div class="col">
                2
            </div>
            <div class="col">
                3
            </div>
            <div class="col">
                4
            </div>-->
        </div>
    </div>
</template>
<script>
import Coin from '../../random/Coin'
export default {
    data(){
        return {
            coins: ""
        }
    },
    mounted(){
        this.getInfoCoins()
    },
    methods:{
        getInfoCoins(){
            console.log('aaaaa cargando')
            Coin.list().then(({data}) => {
                console.log(data,"data")
                //alert('exito')
                this.coins = data
            }).catch(err => {
                console.log(err)
            })
        },
        getImageCoin(index){
            //return "/src/img/coins1.png"
            let number = index+1
            return `/public/img/coins${number}.png`;
        },
        
        getMainImageCoin(){
                console.log('aaaaaaaaaaaaaaaaaaaaa')
                return `${config.apiUrl}/images/coins/coins0.png`;
        }
    }
}
</script>
<style scoped>
    .flex-container {
        display: flex;
    }

    .container-fluid{
        width: 100%;
        min-height: 100vh;
    }


    .first-coin{
        width: 100%;
        height: 100vh;
    }

    .coins .col{
        padding: 0px;
    }

    .cardCoin{
        height: 300px;
        background-color: #464646;
    }

    .cardCoin:nth-child(2n+0) {
        background-color: #555555;
    }

    .cardCoin>img{
        float: right;
        margin-right: 45px;
        margin-top: 24px;
    }

    .imgIcon0{
        width: 15px;
    }

    .imgIcon1{
        width: 35px;
    }
    
    .imgIcon2{
        width: 55px;
    }

    .imgIcon3{
        width: 55px;
    }

    .titleCoin{
        margin-top: 20%;
        margin-left: 20%;
        font-family: "Trade Gothic";
        font-size: 100px;
        color: white;
    }

    .titleCoin span{
        font-size: 20px;
    }

    
</style>