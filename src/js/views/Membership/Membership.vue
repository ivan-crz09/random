<template>
    <div class="container-fluid">
        <div class="row">
            <iframe class="video-membership"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1">
            </iframe>
        </div>
        <div class="flex-container">
            <div class="d-flex flex-column">
                <div class="red-bar"></div>
            </div>
            <div class="d-flex flex-column">
                <h2 class="subtitle-random">MEMBRESIA®</h2>
                <h1 class="title-random">RANDOM X</h1>
            </div>
        </div>
        <div class="row">
            <img class="first-membership" :src="firstMembership()" alt="First slide">
        </div>
        <div class="row">
            <img class="first-membership" :src="secondMembership()" alt="First slide">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Membership",
        data(){
            return {
                imgMembership: "/public/img/firstMembership.jpg",
                imgMembership2: "/public/img/secondMembership.png"
            }
        },
        methods: {
            firstMembership(){
                console.log('aaaaaaaaaaaaaaaaaaaaa')
                return `${config.apiUrl}/images/membership/membership0.png`;
            },
            secondMembership(){
                return `${config.apiUrl}/images/membership/membership1.png`;
            }
        }
    }
</script>

<style scoped>
    .video-membership{
        width: 100%;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        height: 600px;
        border-bottom-color: red;
    }

    .first-membership{
        width: 100%;
    }

    .red-bar {
        border-left: 10px solid red;
        height: 88px;
    }

    .flex-container {
        display: flex;
        position: absolute;
        margin-left: 10%;
        margin-top: 10%;
    }

    .flex-container2 {
        display: flex;
        position: absolute;
        margin-left: 10%;
        margin-top: 10%;
    }

    .subtitle-random {
        font-size: 20px;
        color: white;
        margin-left: 5px;
    }

    .title-random {
        margin-left: 5px;
        color: white;
        font-size: 58px;
        font-family: "GothamBook";
        font-weight: bold;
    }
</style>
