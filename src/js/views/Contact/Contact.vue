<template>
    <div class="container-fluid">
        <div class="row">
            <div class="flex-container">
                <div class="d-flex flex-column">
                    <img class="image-contact" :src="this.imgContact" alt="First slide">
                </div>
                <div class="d-flex flex-column">
                    <div class="form-contact">
                        <h1 class="title-contact">CONTACTO</h1>
                        <br/>
                        <input type="text" name="firstname" class="contact-input" placeholder="NOMBRE*">
                        <br/>
                        <br/>
                        <input type="text" name="firstname" class="contact-input" placeholder="CORREO*">
                        <br/>
                        <br/>
                        <input type="text" name="firstname" class="contact-input" placeholder="TELÉFONO">
                        <br/>
                        <br/>
                        <input type="text" name="firstname" class="contact-input" placeholder="ASUNTO">
                        <br/>
                        <button class="contact-send">ENVIAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data(){
            return {
                imgContact: "/public/img/motocycle.png"
            }
        }
    }
</script>

<style scoped>
    .image-contact {
        height: 900px;
    }

    .flex-container {
        display: flex;
    }

    .form-contact{
        margin-left: 184px;
        margin-top: 62px;
    }

    .title-contact{
        color: white;
        font-family: "Trade Gothic";
        font-weight: bold;
        font-stretch: condensed;
        font-size: 45px;
    }

    .contact-input{
        width: 950px;
        background-color: transparent;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 1px solid #464646;
    }

    .contact-send{
        margin-top: 500px;
        width: 100%;
        background-color: transparent;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        color: white;
        font-family: "Trade Gothic";
        font-weight: bold;
        font-stretch: condensed;
        font-size: 24px;
    }
</style>
