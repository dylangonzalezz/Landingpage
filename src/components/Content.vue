<template>
    <div class="content">
        <div class="content__container content__container--right">
            <div class="content__textcontainer">
                <div class="content__text">
                    <h1 class="content-typography__large">"Hey B whats poppin?"</h1>
                </div>
            </div>
            <div class="content__imagecontainer" id="image1">
            </div>
            <!--<AppSpinner :visible="getInstagramLoading1" :color="black"></AppSpinner>-->
        </div>
        <div class="content__container content__container--left">
            <div class="content__imagecontainer" id="image2">
            </div>
            <!--<AppSpinner :visible="getInstagramLoading2" :color="black"></AppSpinner>-->
            <div class="content__textcontainer">
                <div class="content__text">
                    <p class="content-typography__text">
                        Everyday im Hustelin
                        Everyday im Hustelin
                        Everyday im Hustelin
                        Everyday im Hustelin
                        Everyday im Hustelin
                        Everyday im Hustelin
                        Everyday im Hustelin
                        Everyday im Hustelin
                        Everyday im Hustelin
                        Everyday im Hustelin
                    </p>
                </div>
            </div>
        </div>
        <div class="content__container content__container--right">
            <div class="content__textcontainer">
                <div class="content__text">
                    <p class="content-typography__text">We ballin</p>
                </div>
            </div>
            <div class="content__imagecontainer" id="image3">
            </div>
            <!--<AppSpinner :visible="getInstagramLoading3" :color="black"></AppSpinner>-->
        </div>
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

    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    import Spinner from './Spinner.vue';

    export default {
        data() {
            return {
                loading: false,
                black: "dark",
                white: "white"
            }
        },
        components: {
            AppSpinner: Spinner
        },
        methods: {
            loadInstagram: function() {
                this.$store.dispatch('asyncChangeInstagram');
            },
        },
        computed: {
            ...mapGetters([
                'getInstagramLoading1',
                'getInstagramLoading2',
                'getInstagramLoading3'
            ]),
        },
        mounted: function() {
            this.loadInstagram();
        }
    }
</script>
