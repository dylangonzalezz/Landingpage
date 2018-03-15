<template>
    <div class="picturefolder">
        <div v-if="folder != null">
            <div class="picturefolder__container-title">
                <h1 class="picturefolder__title">{{ folder.fields.title }}</h1>
                <p class="picturefolder__subtitle">{{ folder.fields.description }}</p>
            </div>
            <div v-for="(image, index) in folder.fields.images">
                <div class="picturefolder__image-container">
                    <div class="picturefolder__imagelayout">
                        <img :src="image.fields.file.url" class="picturefolder__image">
                    </div>
                </div>
            </div>
        </div>
        <div v-else>loading...</div>
        <router-link to="/">
            <button class="picturefolder__close">+</button>
        </router-link>
        {{ createFolder() }}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                folder: null,
            }
        },
        methods: {
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
            createFolder: function() {
                var id = this.$route.params.id;

                if( this.$store.getters.getFolders.items ) {
                    var imageFolders = this.$store.getters.getFolders.items[0].fields.imageFolders;
                }

                this.folder = null;

                if( id > imageFolders.length || id < 1 || isNaN(id)) {
                    this.$router.push("/contact");
                }
                this.folder = this.getImageFolder(id);
            },
            loadClass: function () {
                var folders = this.getImageFolders();

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
        },
    }
</script>
