<template>
    <div class="content">
        <div class="content__container content__container--right">
            <div class="content__textcontainer">
                <div class="content__text">
                    <h1 class="content-typography__large">Whats poppin?</h1>
                </div>
            </div>
            <div class="content__imagecontainer" id="image1">
            </div>
        </div>
        <div class="content__container content__container--left">
            <div class="content__imagecontainer" id="image2">
            </div>
            <div class="content__textcontainer">
                <div class="content__text">
                    <h2>Heyooooo!</h2>
                    <br>
                    <p class="content-typography__text">
                        My name is Dylan Gonzalez.
                    </p>
                    <p class="content-typography__text">
                        Im a <b>Videographer</b>/ <b>Webdeveloper</b> based in switzerland.
                        Nice to meet you :D
                    </p>
                    <br>
                    <p class="content-typography__text">You can check out some more of my stuff </p><a class="content-typography__link" rel="noopener" href="https://www.youtube.com/channel/UCJgzDLBduIim8h-6-_fS8YA/videos">here</a>
                </div>
            </div>
        </div>
        <div class="content__container content__container--right">
            <div class="content__textcontainer">
                <div class="content__text">
                    <p class="content-typography__text">
                    Im always up for <b>collaboration</b>.
                    </p>
                    <br>
                    <p class="content-typography__text">
                        I believe working together is the most fun and brings the most value.
                    </p>
                </div>
            </div>
            <div class="content__imagecontainer" id="image3">
            </div>
        </div>
        <div class="content__container content__container--left">
            <div class="content__imagecontainer" id="image4">
            </div>
            <div class="content__textcontainer">
                <div class="content__text">
                    <p class="content-typography__text content-typography__center">
                    Let's create some <b>AWESOME</b> videos together
                    </p>
                    <br>
                    <router-link to="contact"><p class="content-typography__buylink content-typography__center">Hit me up!!</p></router-link>
                </div>
            </div>
        </div>
        <div id="instafeeder"></div>
    </div>
</template>

<script>
    $(function() {
        $('#image1').waypoint(function() {
            $('#image1').addClass('slidein-right');
        }, {
            offset: '50%'
        });
    });

    $(function() {
        $('#image2').waypoint(function() {
            $('#image2').addClass('slidein-left');
        }, {
            offset: '50%'
        });
    });

    $(function() {
        $('#image3').waypoint(function() {
            $('#image3').addClass('slidein-right');
        }, {
            offset: '50%'
        });
    });

    $(function() {
        $('#image4').waypoint(function() {
            $('#image4').addClass('slidein-left');
        }, {
            offset: '50%'
        });
    });

    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            loadInstagram: function() {
                this.$store.dispatch('asyncChangeInstagram');
            },
        },
        mounted: function() {
            this.loadInstagram();
        }
    }
</script>
