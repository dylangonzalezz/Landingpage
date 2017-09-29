<template>
    <div class="container footer__container">
        <div class="row">
            <button class="col-sm-12 footer__button" type="button" data-hover="Scroll up" data-active="Bye" @click="click"><span>^</span></button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            click(){
                    $('body,html').animate({
                        scrollTop: 0
                    }, 800);
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer{
        &__container{
            height: 10vh;
            overflow: hidden;
            position: relative;
        }
        &__button{
            border: none;
            background-color: white;
            font-size: 4em;
            & span{
                -webkit-transition: .2s,opacity .2s;
                -moz-transition: .2s,opacity .2s;
                -o-transition: .2s,opacity .2s;
                transition: .2s,opacity .2s;
            }
        }
        &__button:hover{
            font-size: 4em;
            &::before{
                opacity: 1;
                -webkit-transform: translate(0,0);
                -moz-transform: translate(0,0);
                -ms-transform: translate(0,0);
                -o-transform: translate(0,0);
                transform: translate(0,0);
                -webkit-transition-delay: .2s;
                -moz-transition-delay: .2s;
                -o-transition-delay: .2s;
                transition-delay: .2s;
            }
            & span{
                opacity: 0;
                -webkit-transition-delay: .2s;
                -moz-transition-delay: .2s;
                -o-transition-delay: .2s;
                transition-delay: .2s;
            }
        }
        &__button::before{
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            text-align: center;
            content: attr(data-hover);
            -webkit-transition: .4s,opacity .6s;
            -moz-transition: .4s,opacity .6s;
            -o-transition: .4s,opacity .6s;
            transition: .4s,opacity .6s;
            opacity: 0;
            -webkit-transform: translate(0,5vh);
            -moz-transform: translate(0,5vh);
            -ms-transform: translate(0,5vh);
            -o-transform: translate(0,5vh);
            transform: translate(0,5vh);
        }
        &__button:focus {
            border: none;
            box-shadow: none;
            outline-width: 0;
        }
    }
</style>
