<template>
    <nav class="navbar navbar-light navbar-expand-lg justify-content-center ">
        <a href="/" class="navbar-brand d-flex mr-auto ml-4"><img src="/public/img/random_logo.png" class="img-brand" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <!--<span class="navbar-toggler-icon"></span>-->
            <i class="fa fa-navicon icon-toggler"></i>
        </button>
        <div class="navbar-collapse collapse" id="collapsingNavbar3">
            <ul class="navbar-nav justify-content-center">
                <template v-for="(section,index) in menu">
                    <li class="nav-item" :key="index">
                        <router-link class="nav-link text-white mr-5" :to="section.redirect">{{section.name}}</router-link>
                    </li>
                </template>
                <!--
                <template v-if="user.nombre">
                    <li class="nav-item moverClase"><router-link class="nav-link text-white mr-5" to="nombre">Bienvenido: {{user.nombre}}</router-link></li>
                </template>
                -->

            </ul>
        </div>
    </nav>
</template>
<script>
    export default {
        data(){
          return {
              menu: [
                  {
                      "name": "HOME",
                      "redirect": "/",
                      "class": "router-link-active"
                  },
                  {
                      "name": "EVENTOS",
                      "redirect": "/events",
                      "class": ""
                  },
                  {
                      "name": "MONEDAS",
                      "redirect": "coins",
                      "class": ""
                  },
                  {
                      "name": "MEMBRESÍA",
                      "redirect": "membership",
                      "class": ""
                  },
                  {
                      "name": "TIENDA",
                      "redirect": "store",
                      "class": ""
                  },
                  {
                      "name": "CONTACTO",
                      "redirect": "contact",
                      "class": ""
                  },
                  {
                      "name": "LOGIN",
                      "redirect": "login",
                      "class": ""
                  }
              ],
              user: ""
          }
        },
        methods:{
        },
        mounted(){
            console.log('header mounted')
            this.user = store.getters.user
            console.log(this.user,"----------")
        }
    }
</script>

<style scoped>
    nav {
        background-color: transparent;
        width: 100%;
        z-index:2;
        padding-top: 20px;
        padding-bottom: 20px;
        position: absolute;
    }

    .navbar-brand{
        width: 30% !important;
    }

    .img-brand{
        width: 160px
    }

    .router-link-exact-active {
        border-bottom: 3px solid;
        border-bottom-color: #db0a40;
    }


    .nav-link{
        font-weight: bold;
        font-style: normal;
        padding: 0px !important;
        text-shadow: 0 0 20px #000f1e;
    }

    .moverClase {
        margin-left: 10px;
    }

    .navbar-light .navbar-toggler {
        border-color: rgba(255, 255, 255, 0.71);
    }

    .icon-toggler{
        color:#fff; 
        font-size:24px;
    }

    @media only screen and (max-width: 1630px) and (min-width: 1131px ) {
        .navbar-brand {
            width: 20% !important;
        }
    }

    @media only screen and (max-width: 1130px) and (min-width: 992px ) {

        .navbar-expand-lg .navbar-collapse {
            font-size: 12px;
        }

        .img-brand[data-v-c8e6104e] {
            width: 135px;
        }

        .navbar-brand{
            width: 20% !important;
        }

    }

    @media only screen and (max-width: 991px ) {
        .img-brand[data-v-c8e6104e] {
            width: 135px;
        }
    }

</style>
