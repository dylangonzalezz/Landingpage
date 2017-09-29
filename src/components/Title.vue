<template>
    <div class="title__container">
        <h1 class="title__header">Dylonski</h1>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Special+Elite');

.title{
    &__container{
        background-color: rgb(50, 50, 50);
        height: 100vh;
        width: 100%;
        position: relative;
        background-image: url('../assets/ContentMedia/Media-Title.jpeg');
        background-size: cover;
        filter: grayscale(100%);
     }
    &__header{
        text-align: center;
        margin: 0;
        padding-top: 40vh;
        /*color: rgb(230, 230, 230);*/
        color: whitesmoke;
        font-size: 12em;
        font-family: 'Special Elite', Consolas;
    }
}
</style>
