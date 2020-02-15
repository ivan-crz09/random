<template>
    <div class="row partners">
        <template v-for="(orderPartner,index) in orderPartners">
            <div class="col">
                <img :src="orderPartner.partner.imgs.logo" alt="Girl in a jacket" width="100%" height="200px">
            </div>
            
        </template>
        <!--
        <div class="col">
            <img src="http://localhost:5000/images/home/partners/partner0.png" alt="Girl in a jacket" width="100%" height="200px">
        </div>
        <div class="col">
            <img src="http://localhost:5000/images/home/partners/partner1.png" alt="Girl in a jacket" width="100%" height="200px">
        </div>
        <div class="col">
            <img src="http://localhost:5000/images/home/partners/partner2.png" alt="Girl in a jacket" width="100%" height="200px">
        </div>
        <div class="col">
            <img src="http://localhost:5000/images/home/partners/partner3.png" alt="Girl in a jacket" width="100%" height="200px">
        </div>
        <div class="col">
            <img src="http://localhost:5000/images/home/partners/partner4.png" alt="Girl in a jacket" width="100%" height="200px">
        </div>
        -->
    </div>
</template>

<script>
    import Home from '../../random/Home'
    export default {
        name: "Partners",
        data(){
            return {
                orderPartners: []
            }
        },
        mounted(){
            this.chargePartners()
        },
        methods:{
            chargePartners(){
                Home.getPartners().then(({data}) => {
                    console.log(data,"partners")
                    this.orderPartners = data
                    console.log(this.orderPartners,"partnerssss")
                    //this.textMembership = data[2].textMembership
                }).catch(err => {
                    console.log(err)
                })
            },
            getPartner(partner){
                return `${config.apiUrl}/images/home/membership/membership0.png`;
            }
        }
    }
</script>

<style scoped>
    .partners{
    }

    .partners .col{
        padding: 0px;
    }
</style>
