

<template>

<div class="content">
    <div class="content__container content__container--right content__shadow--top">
        <div class="content__textcontainer">
            <div class="content__text">
                <h1 class="content-typography__large">Whats poppin?</h1>
            </div>
        </div>
        <div class="content__imagecontainer" id="image1">
            <div class="content__imagelayout">
                <img class="content__image" id="content__image1">
            </div>
        </div>
    </div>
    <div class="content__container content__container--left">
        <div class="content__imagecontainer" id="image2">
            <div class="content__imagelayout">
                <img class="content__image" id="content__image2">
            </div>
        </div>
        <div class="content__textcontainer">
            <div class="content__text">
                <h2>Heyooooo!</h2>
                <br>
                <p class="content-typography__text">
                    My name is Dylan Gonzalez.
                </p>
                <p class="content-typography__text">
                    Im a <b>Videographer</b> based in switzerland. Nice to meet you :D
                </p>
                <br>
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
            <div class="content__imagelayout">
                <img class="content__image" id="content__image3">
            </div>
        </div>
    </div>
    <div class="content__container content__container--left content__shadow--bottom">
        <div class="content__imagecontainer" id="image4">
            <div class="content__imagelayout">
                <img class="content__image" id="content__image4">
            </div>
        </div>
        <div class="content__textcontainer">
            <div class="content__text">
                <p class="content-typography__text content-typography__center">
                    So let's create some <b>AWESOME</b> videos together
                </p>
            </div>
        </div>
    </div>
    <div id="instafeeder"></div>
</div>

</template>

<script>

$(function() {
    $('#image1').addClass('content__imagecontainer--no-opacity');
    $('#image2').addClass('content__imagecontainer--no-opacity');
    $('#image3').addClass('content__imagecontainer--no-opacity');
    $('#image4').addClass('content__imagecontainer--no-opacity');
});

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

import {
    mapGetters
}
from 'vuex';
import {
    mapMutations
}
from 'vuex';
import {
    mapActions
}
from 'vuex';

export default {
    data() {
            return {
                loading: false,
            }
        },
        methods: {
//            loadInstagram: function() {
//                this.$store.dispatch('asyncChangeInstagram');
//            },
        },
        mounted: function() {
            //this.loadInstagram();
        },
        created: function() {
            $(document).ready(function() {
                $(this).scrollTop(0);
            });
        }
}

</script>
