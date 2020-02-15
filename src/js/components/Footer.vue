<template>
    <footer class="bottom py-4 text-white-50">
        <div class="container-fluid">
            <div class="row footer-menu">
                <div class="col-md-1">
                    <img src="/src/img/LogoFooter.png" width="100%">
                </div>
                <div class="col offset-md-1">
                    <div class="flex-container">
                        <div class="d-flex flex-column">
                            <ul class="first-menu">
                                <li>
                                    <a class="text-white" href="#">Home</a>
                                </li>
                                <li>
                                    <a class="footer-submenu" href="#">Quienes Somos</a>
                                </li>
                                <li>
                                    <a class="footer-submenu" href="#">Que hacemos</a>
                                </li>
                                <li>
                                    <a class="footer-submenu" href="#">Cómo le hacemos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="text-white" href="//codeply.com">Eventos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="footer-submenu" href="//codeply.com">Videos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="footer-submenu" href="//codeply.com">Noticias</a>
                                </li>
                                <li class="nav-item">
                                    <a class="footer-submenu" href="//codeply.com">Membresia</a>
                                </li>
                                <li class="nav-item">
                                    <a class="footer-submenu" href="//codeply.com">Monedas</a>
                                </li>
                                <li class="nav-item">
                                    <a class="text-white" href="#">Contacto</a>
                                </li>
                                <li class="nav-item">
                                    <a class="text-white" href="#">Login</a>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex flex-column">
                            <input class="input-newsletter" v-model="newsletter" placeholder="Newsletter">
                            <button class="button-newsletter">SUSCRIBIRME</button>
                        </div>
                        <div class="d-flex flex-column first-social-network social-network">
                            <img src="/src/img/banner/Vimeo%20Logo.png" width="100%">
                        </div>
                        <div class="d-flex flex-column social-network">
                            <img src="/src/img/banner/YouTube%20Logo.png" width="100%">
                        </div>
                        <div class="d-flex flex-column social-network">
                            <img src="/src/img/banner/FaceBook%20Logo.png" width="100%">
                        </div>
                        <div class="d-flex flex-column social-network">
                            <img src="/src/img/banner/Twitter%20Logo.png" width="100%">
                        </div>
                        <div class="d-flex flex-column social-network">
                            <img src="/src/img/banner/Instagram%20Logo.png" width="100%">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return {
                newsletter: ''
            }
        }
    }
</script>

<style scoped>
    footer{
        background-color: #111111;
        bottom: 0;
        left: 0;
        right: 0;
    }
    ul {
        list-style-type: none;
    }

    .flex-container {
        display: flex;
    }

    .footer-menu {
        margin-top: 30px;
        margin-left: 10px;
    }

    .first-menu{
        margin-right: 60px;
    }

    .first-menu a{
        color: gray !important;
        font-size: 13px;
    }

    .footer-submenu {
        color: #474747 !important;
        font-size: 14px;
    }

    .newsletter{
        background-color: #111111;
        border: 1px solid #606265;
    }

    .input-newsletter {
        width: 370px;
        text-indent: 6px;
        border: 1px solid #505050;
        background-color: black;
    }

    .button-newsletter{
        margin-top: 10px;
        width: 185px;
        border-radius: 20px;
        color: white;
        border: none;
        background-color: red;
        font-size: 14px;
        height: 25px;
        font-family: "Trade Gothic";
        font-weight: bold;
        font-style: italic;
    }

    .first-social-network{
        margin-left:40% !important;
    }

    .social-network{
        margin-left: 30px;
    }

    .social-network img{
        width: 80%;
        margin-top: 2px;
    }

</style>
