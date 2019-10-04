<template>
    <nav class="navbar navbar-light navbar-expand-md justify-content-center ">
        <a href="/" class="navbar-brand d-flex w-50 mr-auto ml-4"><img src="/public/img/random_logo.png" class="img-brand" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
            <ul class="navbar-nav w-100 justify-content-center">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="//codeply.com">Eventos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Membresia</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contacto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Login</a>
                </li>
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
        mounted(){
            console.log('header mounted')
        }
    }
</script>

<style scoped>
    nav {
        background-color: #f90202;
    }

    .img-brand{
        width: 170px
    }
</style>
