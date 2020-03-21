<template>
    <div class="container-fluid">
        <sliderHome></sliderHome>
        <!--
        <banner-vue></banner-vue>
        <membership></membership>
        <br/>
        <partners></partners>
        -->

    </div>
</template>
<script>
export default {
    components: {
            'bannerVue': require('../components/Home/Banner').default,
            'membership': require('../components/Home/Membership').default,
            'partners': require('../components/Home/Partners').default,
            'sliderHome': require('../components/Home/SliderHomev2').default
    },
}
</script>
<style scoped>
.container-fluid{
    width: 95%;
    min-height: 100vh;
    background-color: #363636;
    margin: 0;
    padding: 0;
}

@media only screen and (max-width: 991px ) {
    .container-fluid{
        width: 100%;
    }
}
</style>