<template>
    <div class="contactform">
        <h2 class="contactform__title">Let's work together</h2>
        <form class="contactform__container" action="https://formspree.io/dylonskiawsome@gmail.com"
              method="POST">
            <div class="contactform__formgroup">
                <input type="Email" class="contactform__input" placeholder="Email" name="_replyto">
            </div>
            <div class="contactform__formgroup">
                <textarea class="contactform__input contactform__input--textarea" placeholder="Message"></textarea>
            </div>
            <input class="contactform__button--submit" type="submit" value="Fire Away">
        </form>
        <router-link to="/">
            <button class="contactform__close">+</button>
        </router-link>
    </div>
</template>
