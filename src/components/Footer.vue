<template>
    <div class="container footer__container">
            <button class="footer__button" type="button" data-hover="Scroll up" data-active="Bye" @click="click"><span>^</span></button>
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
