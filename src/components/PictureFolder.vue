<template>
    <div class="picturefolder">
        <!--<h1>Pics</h1>-->
        <!--<br>-->
        <!--<p>Id: {{ kek }}</p>-->
        <div v-if="lel != null">
            <div class="picturefolder__container-title">
                <h1 class="picturefolder__title" id="lel">{{ lel.fields.title }}</h1>
                <p class="picturefolder__subtitle">{{ lel.fields.description }}</p>
            <!--<p>{{ lel.fields }}</p>-->
            </div>
            <div v-for="(image, index) in lel.fields.images">
                <!--<div> {{image.fields.file.url }}</div>-->
                <div class="picturefolder__image-container">
                <!--<div class="picturefolder__image-container" :id="'picturefolder' + index">-->
                    <div class="picturefolder__imagelayout">
                        <img :src="image.fields.file.url" class="picturefolder__image">
                    </div>
                </div>
            </div>
        </div>
        <div v-else>loading...</div>
        <!--<div>{{ lel }}</div>-->
        <!--<div v-on:click="go">wot</div>-->
        <!--<br>-->
        <!--<p>{{ getFolders }}</p>-->
        <router-link to="/">
            <button class="picturefolder__close">+</button>
        </router-link>
        {{ example() }}
        <!--{{ loadClass() }}-->
    </div>
</template>

<script>
//    $(function() {
//            $('.picturefolder__container-title').addClass("nope");
//            for(var div in x) {
//                div.addClass('nope');
//            }
//            debugger;
//    });

    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                kek: this.$route.params.id,
                lel: null,
            }
        },
        methods: {
//            go: function() {
//                var imageFolders = this.$store.getters.getFolders;
//                this.lel = "wfwf";
//                this.lel = imageFolders.length;
//            },
            loadPictures: function() {
                this.$store.dispatch('allImageFolders');
            },
            getImageFolders: function() {
                if( this.$store.getters.getFolders.items ) {
                    return this.$store.getters.getFolders.items[0].fields.imageFolders;
                }
                return "Nope"
            },
            getImageFolder: function(id) {
                if( this.$store.getters.getFolders.items || isNan(id)) {
                    var index = id -1;
                    return this.$store.getters.getFolders.items[0].fields.imageFolders[index];
                }
                return "Nope"
            },
            example: function() {
                var id = this.$route.params.id;

                if( this.$store.getters.getFolders.items ) {
                    var imageFolders = this.$store.getters.getFolders.items[0].fields.imageFolders;
                }

                this.lel = null;

                if( id > imageFolders.length || id < 1 || isNaN(id)) {
                    this.$router.push("/contact");
                }
                this.lel = this.getImageFolder(id);
            },
            loadClass: function () {
//                if( this.$store.getters.getFolders.items ) {
//                    var imageFolders = this.$store.getters.getFolders.items[0].fields.imageFolders;
//                }
                var folders = this.getImageFolders();
//                debugger;
//                var x = folders.length;

//                folders.forEach(function(i) {
//                    var g = i;
//                    debugger;
//                    $('#picturefolder' + i).waypoint(function () {
//                        $('#picturefolder' + i).addClass('slidein-right');
//                    }, {
//                        offset: '50%'
//                    });
//                });
                for (let i=0; i<=folders.length; i++) {
                        $('#picturefolder' + i).waypoint(function () {
                            $('#picturefolder' + i).addClass('slidein-bottom');
                        }, {
                            offset: '50%'
                        });
                }
            }
        },
        mounted: function() {
            this.loadPictures();
//            var id = this.$route.params.id;
//            if( this.$store.getters.getFolders.items ) {
//                var imageFolders = this.$store.getters.getFolders.items[0].fields.imageFolders;
//            }
//            this.lel = "wfwf";
//            this.lel = imageFolders;
//            var lol = (imagefolders = id);
//            debugger;
//            if(imageFolders.length = id ) {
//                this.$router.push("/contact");
//            }
        },
        computed: {
            ...mapGetters([
                'getFolders',
            ]),
        },
        created: function() {
            $(document).ready(function(){
                $(this).scrollTop(0);
            });
            this.loadPictures();
//            var id = this.$route.params.id;
//            if( this.$store.getters.getFolders.items ) {
//                var imageFolders = this.$store.getters.getFolders.items[0].fields.imageFolders;
//            }
//            this.lel = "wfwf";
//            this.lel = imageFolders;
//            if( id == imageFolders.length) {
//                this.$router.push("/contact");
////            var id = this.$route.params.id;
////            var imageFolders = this.getImageFolders();
////            this.lel = "wfwf";
////            this.lel = imageFolders;
////            if( id == imageFolders.length) {
////                this.$router.push("/contact");
//            }

//            var id = this.$route.params.id;
//            var imageFolders = this.getImageFolders();
//            this.lel = "wfwf";
//            this.lel = imageFolders.length;
//            this.lel = this.$route.params.id;
//            var id = this.$route.params.id;
//            var imageFolders = this.$store.getters.getFolders();
//            this.lel = imageFolders.length;
//            if( id <= imageFolders.length) {
//                this.$router.push("/contact");
//            }
        },
    }
</script>
