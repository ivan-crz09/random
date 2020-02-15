<template>
    <nav class="navbar navbar-light navbar-expand-md justify-content-center ">
        <a href="/" class="navbar-brand d-flex mr-auto ml-4"><img src="/public/img/random_logo.png" class="img-brand" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="navbar-nav w-100 justify-content-center">
                <template v-for="section in menu">
                    <li class="nav-item">
                        <router-link class="nav-link text-white mr-5" :to="section.redirect">{{section.name}}</router-link>
                    </li>
                </template>
                <template v-if="user.nombre">
                    <li class="nav-item moverClase"><router-link class="nav-link text-white mr-5" to="nombre">Bienvenido: {{user.nombre}}</router-link></li>
                </template>

            </ul>
            <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">
                        <i class="fas fa-plus fa-2x"></i>
                    </a>
                </li>
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
    }

    .navbar-brand{
        width: 42% !important;
    }

    .img-brand{
        width: 170px
    }

    .router-link-active {
        text-decoration-line: underline;
    }


    .nav-link{
        font-weight: bold;
        font-style: normal;
    }

    a{
        line-height: 47pt;
    }

    .moverClase {
        margin-left: 10px;
    }

</style>
