<template>
    <div>
        <div class="row no-gutters ">
            <div class="col">
                 <div class="flex-container">
                    <div class="d-flex flex-column">
                        <div class="red-bar"></div>
                    </div>
                    <div class="d-flex flex-column">
                        <h2 class="subtitle-random">CONVENIOS RANDOM X®</h2>
                        <h1 class="title-random">MEMBRESIA</h1>
                    </div>
                </div>
                <img :src="firstMembership()" alt="Girl in a jacket" width="100%" height="975">
            </div>
        </div>
        <div class="row no-gutters ">
            <div class="col">
                <div class="row text-membership">
                    <div class="col-md-4">
                        <p class="para-membership">
                            {{textMembership}}
                        </p>
                        <button class="go-membership">¡Vamos!</button>
                    </div>
                </div>
                <img :src="secondMembership()" alt="Girl in a jacket" width="100%" height="975">
            </div>
        </div>
    </div>
</template>

<script>
    import Membership from '../../random/Home'
    export default {
        name: "Membership",
        data(){
            return {
                textMembership: ""
            }
        },
        mounted(){
            this.getMembership()
        },
        methods:{
            getMembership(){
                Membership.getMembership().then(({data}) => {
                    this.textMembership = data[2].textMembership
                }).catch(err => {
                    console.log(err)
                })
            },
            firstMembership(){
                //http://localhost:5000/images/welcome/membership0.png
                return `${config.apiUrl}/images/home/membership/membership0.png`;
            },
            secondMembership(){
                return `${config.apiUrl}/images/home/membership/membership1.png`;
            }
        }
    }
</script>

<style scoped>
    .red-bar {
        border-left: 10px solid red;
        height: 88px;
    }

    .flex-container {
        display: flex;
        position: absolute;
        margin-left: 10%;
        margin-top: 10%;
        z-index: 1000;
    }

    .subtitle-random {
        font-size: 20px;
        color: white;
        margin-left: 5px;
    }

    .title-random {
        margin-left: 5px;
        color: white;
        font-size: 68px;
        font-family: "Trade Gothic";
        font-weight: bold;
    }

    .text-membership{
        position: absolute;
        display: flex;
        justify-content: flex-end;
        margin-right: 10%;
        margin-top: 500px;
        z-index: 10;
    }

    .text-membership button {
        border-radius: 20px;
        width: 120px;
        height: 30px;
        color: white;
        border: none;
        background-color: red;
    }

    .text-membership button:focus {
        outline:0;
        cursor: pointer;
        background-color: #FABD44;
    }

    .para-membership{
        color: white;
        word-break: break-all;
    }

    .go-membership{
        font-weight: bold;
    }

    img{
        object-fit: cover;
    }

</style>
