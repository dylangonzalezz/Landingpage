<template>
    <div class="contactform__container">
        <p class="contactform__title">Contact</p>
        <div class="contactform__form--container">
            <form>
                <div class="contactform__form contactform__form--name">
                    <p class="contactform__label contactform__label--name">Name:</p>
                    <input type="text" class="contactform__input contactform__input--name" placeholder='"Kekerino Smith"' v-model.lazy="name">
                </div>
                <div class="contactform__form contactform__form--email">
                    <p class="contactform__label contactform__label--email">Email:</p>
                    <input type="email" class="contactform__input contactform__input--email" placeholder="kekerino@smith.com" v-model.lazy="email">
                </div>
                <div class="contactform__image"></div>
                <div class="contactform__form contactform__form--subject">
                    <p class="contactform__label contactform__label--subject">Subject:</p>
                    <input type="text" class="contactform__input contactform__input--subject" placeholder='"I like Movies"' v-model="subject">
                </div>

                <div class="contactform__form contactform__form--message">
                    <p class="contactform__label contactform__label--message">Message:</p>
                    <textarea class="contactform__input contactform__input--message" placeholder="U r awesome" cols="40" rows="3" v-model="message"></textarea>
                </div>
                <button class="contactform__button contactform__button--send" type="submit">Send</button>
            </form>
            <br>
            <router-link to="/">
                <button class="contactform__button contactform__button--back">Go back</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                email: "",
                subject: "",
                message: "",
                sent: false
            }
        },
        watch: {
            email: function(val){
                if (!val.includes("@")) {
                    alert("wrong Entry");
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text');
    @import url('https://fonts.googleapis.com/css?family=Special+Elite');

    p{
        margin: 0;
    }

.contactform{
    &__title {
        font-family: 'Libre Barcode 128 Text', 'Special Elite', Consolas;
        color: black;
        font-size: 5em;
        text-align: center;
        margin: 0;
        padding-top: 10%;
    }
    &__image{
        background-image:url('../assets/Contact/coffee-stain-png-9.png');
        background-size: 200px;
        position: absolute;
        height: 190px;
        width: 200px;
        top: 160px;
        left: -100px;
        transform: rotate(180deg);
    }
    &__container{
        height: 100vh;
        width: 100%;
        background-color: black;
        background-image:url('../assets/Contact/dust.png');
    }
    &__form--container{
        height: 300px;
        width: 500px;
        margin: 100px auto 0 auto;
        position: relative;
        left: 90px;
    }
    &__form{
        height: 70px;
        position: relative;
    }
    &__label{
        position: absolute;
        float: left;
        font-family: 'Special Elite', Consolas;
        color: rgb(041,041,041);
    }
    &__input{
        position: absolute;
        float: left;
        left: 200px;
        background-color: whitesmoke;
        box-shadow: none;
        border: none;
        border-bottom: solid 4px rgb(60, 60, 60);
        font-family: 'Special Elite', Consolas;
    }
    &__input--message{
        border: none;
        border-left: solid 2px rgb(60, 60, 60);
        resize: none;
        height: 100px;
    }
    &__input:focus {
        border: none;
        box-shadow: none;
        outline-width: 0;
    }
    &__button{
        margin-top: 70px;
        position: relative;
        left: 160px;
        background-color: whitesmoke;
        border: none;
        font-family: 'Special Elite', Consolas;
        font-size: 1em;
        &--back{
            margin-top: 20px;
            left: 150px;
            color: rgb(60, 60, 60);
        }
    }
    &__button:focus {
        border: none;
        box-shadow: none;
        outline-width: 0;
    }
    &__button:hover {
        border-bottom: solid 1px rgb(73, 73, 73);
    }
}

@media (max-width: 720px)  {
    .contactform{
        &__container{
            width: 100%;
        }
        &__image{
            background-size: 80px;
            position: absolute;
            height: 78px;
            width: 80px;
            top: 10%;
        }
        &__input{
            width: 60%;
            position: relative;
            margin: 0;
            left: 0;
        }
        &__label{
            width: 60%;
            position: relative;
            margin-bottom:20px;
        }
        &__form--container{
            height: 60%;
            width: 80%;
            margin: 5px 0 0 0;
            position: relative;
            left: 20%;
        }
        &__button{
            left: 0;
            margin: 0;
            position: absolute;
            &--back{
                left: 0;
                margin: 0;
            }
        }
        &__input--message{
            border: none;
            border-left: solid 2px rgb(60, 60, 60);
            resize: none;
            width: 60%;
            height: 50px;
        }
    }
}

@media  (max-height: 639px) {
    .contactform{
        &__container{
            width: 100%;
            height: auto;
        }
        &__image{
            background-size: 80px;
            position: absolute;
            height: 78px;
            width: 80px;
            top: 10%;
        }
        &__input{
            width: 60%;
            position: relative;
            margin: 0;
            left: 0;
        }
        &__label{
            width: 60%;
            position: relative;
            margin-bottom:20px;
        }
        &__form--container{
            height: 60%;
            width: 80%;
            margin: 5px 0 0 0;
            position: relative;
            left: 20%;
        }
        &__button{
            left: 0;
            margin: 0;
            position: absolute;
            &--back{
                left: 0;
                margin: 0;
            }
        }
        &__input--message{
            border: none;
            border-left: solid 2px rgb(60, 60, 60);
            resize: none;
            width: 60%;
            height: 50px;
        }
    }
}
</style>
