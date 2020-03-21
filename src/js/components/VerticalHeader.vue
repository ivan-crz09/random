<template>
    <div class="vertical-header">
        <div class="menu-general" @click="showMenu">
            <p class="menu-plus">+</p>
            
            <p class="menu-vh">MENU</p>
        </div>
        <div class="menu-img-random">
            <img src="/public/img/logoRandomVertical.png" width="100%">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        showMenu(){
            alert('mostrar Menu')
        }
    }
}
</script>
<style scoped>
    .vertical-header{
        background-color: #f90202;
        position: fixed;
        z-index: 4;
        right: 0;
        width: 5%;
        height: 100%;
    }

    .menu-plus{
        margin-top: 20px;
        font-size: 40px;
        color: white;
        font-family: "Trade Gothic";
        margin-bottom: 0px;
    }

    .menu-general{
        text-align: center;
        color: white;
        cursor: pointer;
    }

    .menu-vh{
        font-family: 'GothamBook';
        font-weight: bold;
        font-size: 10px;
        margin-top: -13px;
    }

    .menu-img-random{
        text-align: center;
        position: fixed;
        top: 50%;
        right: 1%;
    }

    .menu-img-random img{
        width: 60px;
    }

    @media only screen and (max-width: 1630px) and (min-width: 1131px ) {
        .menu-img-random img {
            width: 50px;
        }

        .menu-img-random {
            right: 6px;
        }
    }

    @media only screen and (max-width: 1130px) and (min-width: 992px ) {
        
        .menu-img-random img {
            width: 39px;
        }

        .menu-img-random {
            right: 6px;
        }
    }

    @media only screen and (max-width: 991px ) {
        .vertical-header {
            display: none;
        }

    }
</style>