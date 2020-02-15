<template>
    <div class="container">
        <br/>
        <div class="row">
            <div class="col-md-6 offset-md-3 text-center login">
                <router-link class="nav-link" to="/registrarse">¿Aún no estás registrado? Crea una cuenta aquí.</router-link>
                <h1 class="mt-2">Iniciar Sesión</h1>
                <p>Ingresar con: </p>
                <button type="button" class="btn-random-social btn-facebook">
                    <span class="fa fa-facebook-f btn-social-icon"></span>
                    <span class="social-separator"></span>
                    <span class="btn-social-text">Iniciar sesión con Facebook</span>
                </button>
                <br/>
                <button type="button" class="btn-random-social btn-google">
                    <span class="btn-social-icon"><img src="/public/img/google-icon@3x.png"></span>
                    <span class="social-separator"></span>
                    <span class="btn-social-text">Iniciar sesión con Google</span>
                </button>
                <div class="login-separator"></div>
                <form class="login-form" @submit.prevent="login">
                    <p>O ingresa tu usuario y contraseña</p>

                    <!-- Email -->
                    <div class="random-form-group">
                        <label>Correo electrónico</label>
                        <input class="random-input" type="email" placeholder="nombre@correo.com"
                               v-model="form.email"
                               id="email-input">
                    </div>

                    <!-- Password -->
                    <div class="random-form-group">
                        <label>Contraseña</label>
                        <input class="random-input" type="password" placeholder="6 caracteres mínimo"
                               v-model="form.password"
                               id="password-input">
                    </div>

                    <button type="submit"
                            class="btn-random random-form-submit"
                            id="submit-button">
                        <span>ENTRAR</span>
                    </button>
                </form>
                <br/>
            </div>
        </div>
        <br/>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data(){
            return {
                form: {
                    email: "",
                    password: ""
                },
                error:false
            }
        },
        methods:{
            login(){
                console.log(this.form.email)
                console.log(this.form.password)
                let data = this.form
                /*
                Auth.login(data.email,data.password).then(()=>{
                    return router.push({"name":'perfil'})
                }).catch(err => {
                    let code = err.response.status
                    console.log(err)
                    if(code == 404 || code == 400){
                        this.error = 'Direccion de correo electronico invalidos'
                    }
                })

                 */
            }
        }
    }
</script>

<style scoped>
    .login {
        background-color: #1a1a1a;
    }

    p {
        color: #FCFFEB;
    }
    h1 {
        color: #fbb813;
        font-size: 1.5rem;
    }

    a {
        color: #FAFAC6;
    }

    .btn-facebook{
        background-color: #2b8fff;
        color: #fff;
        margin-top: 19px;
    }

    .btn-google {
        margin-top: 10px;
        color: #4a4a4a;
        background-color: floralwhite;
    }

    .btn-google img{
        width: 19px;
        height: 19px;
        -o-object-fit: contain;
        object-fit: contain;
    }

    .btn-random-social{
        -webkit-appearance: none;
        -moz-appearance: none;
        width: auto;
        outline: 0;
        border: 0;
        height: 50px;
        border-radius: 11.7px;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        max-width: 325px;
        width: 100%;
        padding: 0;
        display: block;
        margin: 0 auto;
    }

    .btn-social-icon{
        float: left;
        font-size: 19px;
        width: 70px;
        height: 50px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .btn-social-text{
        float: left;
        width: calc(100% - 80px);
        line-height: 50px;
    }

    .social-separator {
        height: 50px;
        background-color: #ebebeb;
        width: 1px;
        float: left;
    }

    .login-separator {
        width: 326px;
        height: 1px;
        background-color: #c4c4c4;
        margin: 24px auto;
    }

    .login-form {
        width: 326px;
        color: #4a4a4a;
        font-size: 16px;
        margin: 0 auto;
        text-align: left;
    }

    .random-form-group{
        margin-bottom: 19.8px;
    }

    .random-form-group label {
        font-size: 16px;
        font-weight: 700;
        color: #4a4a4a;
        margin-left: 19px;
        margin-bottom: 8px;
        display: block;
    }

    .random-form-group input {
        border-radius: 11.7px;
        padding: 0 20px;
        width: 100%;
        font-size: 16px;
    }

    .random-form-submit {
        color: #fff;
        background-color: #f99d32;
        width: 100%;
        height: 50px;
        margin-top: 2px;
        -webkit-animation-duration: .3s;
        -moz-animation-duration: .3s;
        -o-animation-duration: .3s;
        transition: all .15s ease;
        -webkit-transition: all .15s ease;
        -moz-transition: all .15s ease;
        -o-transition: all .15s ease;
    }

    .btn-random {
        width: 100%;
        height: 38px;
        border-radius: 9px;
        background-color: #dc3545;
        color: #fff;
        font-size: 14px;
        font-weight: 900;
        letter-spacing: 1.4px;
        border: 0;
        padding-left: 17px;
        padding-right: 17px;
    }
</style>
