<template>
    <div class="contactform">
        <h2 class="contactform__title">Let's work together</h2>
        <form class="contactform__container">
            <div class="form-group">
                <input type="text" class="form-control contactform__input" placeholder="Name" required>
            </div>
            <div class="form-group">
                <input type="Email" class="form-control contactform__input" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input type="tel" class="form-control contactform__input" placeholder="(Phone Number)">
            </div>
            <div class="form-group">
                <input type="text" class="form-control contactform__input" placeholder="(Title)">
            </div>
            <div class="form-group">
                <input type="text" class="form-control contactform__input" placeholder="(Company)">
            </div>
            <div class="form-group">
                <textarea class="form-control contactform__input contactform__input--textarea" placeholder="Message" required></textarea>
            </div>
            <button type="submit" class="contactform__button--submit">Fire Away</button>
        </form>
        <router-link to="/">
            <button class="contactform__close">+</button>
        </router-link>
    </div>
</template>

<script>
    export default {
    }
</script>
