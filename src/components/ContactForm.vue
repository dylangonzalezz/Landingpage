<template>
    <div class="contactform">
        <h2 class="contactform__title">Let's work together</h2>
        <form class="contactform__container">
            <div class="form-group">
                <input type="text" class="form-control contactform__input" placeholder="Name" required v-model.lazy="name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control contactform__input" placeholder="Subject" v-model.lazy="subject">
            </div>
            <div class="form-group">
                <textarea class="form-control contactform__input contactform__input--textarea" placeholder="Message" required v-model.lazy="message"></textarea>
            </div>
            <a class="contactform__button--submit" v-bind:href="getMailtoLink()">Fire Away</a>
        </form>
        <router-link to="/">
            <button class="contactform__close">+</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                name: "",
                subject: "",
                message: "",
            }
        },
        methods: {
            getMailtoLink: function() {
                var coded = "aZvKcFh1XbFKL9@2LX1v.5KL";
                var key = "ix650qDJ2VFvPC7IenYyafbm1uo4RBEUGkWNMtzA9cjZXTgLslKHQr3pShdOw8";
                var shift = coded.length;
                var link = "";
                for (var i = 0; i < coded.length; i++) {
                    if (key.indexOf(coded.charAt(i))==-1) {
                        var ltr = coded.charAt(i);
                        link += (ltr)
                    }
                    else {
                        var ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
                        link += (key.charAt(ltr))
                    }
                }
                if(this.name == "") {
                    return "mailto:" + link + "?subject=" + this.subject + "&body=" + this.message;
                }

                return "mailto:" + link + "?subject=" + this.subject + "&body=" + this.message + "%0D%0A%0D%0A%0D%0ASincerely%0D%0A%0D%0A-" + this.name;
            }
        }
    }
</script>
