<template>
    <div class="picturefolder">
        <!--{{ createFolder() }}-->
        <!--<div v-if="folder">-->
            <!--<p>loading...</p>-->
            <!--<br>-->
            <!--<p>You might have to reload D:</p>-->
        <!--</div>-->
        <!--<div v-else>-->
            <div class="picturefolder__container-title">
                <h1 class="picturefolder__title" v-text="createFolder().fields.title"></h1>
                <p class="picturefolder__subtitle" v-text="createFolder().fields.description"></p>
            </div>
            <div v-for="(image, index) in createFolder().fields.images">
                <div class="picturefolder__image-container">
                    <div class="picturefolder__imagelayout">
                        <img :src="image.fields.file.url" class="picturefolder__image" alt="Picture not Loaded">
                    </div>
                </div>
            </div>
        <!--</div>-->
        <router-link to="/portfolio">
            <button class="picturefolder__close">+</button>
        </router-link>
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
            getImageFolder: function(id) {
                if( this.$store.getters.getFolders.items) {
                    var index = id -1;
                    return this.$store.getters.getFolders.items[0].fields.imageFolders[index];
                }
                return "Nope"
            },
            getImageFolders: function() {
                if( this.$store.getters.getFolders.items ) {
                    return this.$store.getters.getFolders.items[0].fields.imageFolders;
                }
                return "Nope"
            },
            createFolder: function() {
                var id = this.$route.params.id;

//                if( this.$store.getters.getFolders.items ) {
//                    var imageFolders = this.$store.getters.getFolders.items[0].fields.imageFolders;
//                }

//                this.folder = null;
//
//                if(imageFolders.length) {

                if (!this.getImageFolder(id) || id < 1 || isNaN(id)) {
                    this.$router.push("/");
                }

                return this.getImageFolder(id);
//                    this.folder = this.getImageFolder(id);
            },
        },
        mounted: function() {
            this.loadPictures();
        },
        computed: {
            ...mapGetters([
                'getFolders',
            ]),
        },
    }
</script>
