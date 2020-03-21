<template>
    <div class="row no-gutters events" v-if="banners.length">
        <div class="col">
            <div class="General">
                <div>1</div>
                <div>2</div>
                <div>3</div>  
                <div>4</div>
                <div>5</div>
                <div>6</div>  
                <div>7</div>
                <div>8</div>
                <div>9</div>  
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
        methods:{
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
        }

    }
</script>