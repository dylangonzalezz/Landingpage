<template>
    <div class="videos">
            <div v-for="(video, index) in getAllVideos()" class="videos__video">
                <div class="videos__video-container">
                    <div class="videos__video-info">
                        <h2 class="videos__video-title">{{ video.fields.title }}</h2>
                        <p class="videos__video-description">{{ video.fields.description }}</p>
                    </div>
                    <div class="videos__video-iframe">
                        <iframe :src="getIframeUrl(video.fields.url)" class="videos__video-player" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        <!--<p>{{ wot }}</p>-->
        <!--<p>{{ lel }}</p>-->
        <!--<br>-->
        <!--<p>{{ allVideos }}</p>-->
        <!--</div>-->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                allVideos: [],
            }
        },
        methods: {
            loadVideos: function() {
                this.$store.dispatch('allVideos');
            },
            getAllVideos: function() {
                if( this.$store.getters.getVideos.items ) {
                    this.allVideos = this.$store.getters.getVideos.items[0].fields.videos;
                    return this.$store.getters.getVideos.items[0].fields.videos;
                }
            },
            getIframeUrl: function (url) {
                var vimeourl = "https://vimeo.com/";
                if(typeof url == 'string', url.includes(vimeourl)) {
                    return url.replace("https://vimeo.com/","https://player.vimeo.com/video/");
                }
            }
//            goToPictures: function(index) {
//                index = index + 1;
//                this.$router.push("/pics/" + index);
//            }
        },
        computed: {
            ...mapGetters([
                'getVideos',
            ]),
        },
        mounted: function() {
            this.loadVideos();
        }
    }
</script>

<!--<template>-->
<!--<div>-->
<!--<div class="video__container video__contentshadow">-->
<!--<iframe src="https://player.vimeo.com/video/253480753" class="video__player" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--}-->
<!--</script>-->
