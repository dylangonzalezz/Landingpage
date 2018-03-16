<template>
    <div class="gallery">
        <h2 class="gallery__title">Pics</h2>
        <div class="gallery__container">
            <div v-for="(folder, index) in getImageFolders()" class="gallery__container-folder">
                <router-link :to="goToPictures(index)" class="gallery__folder">
                    <div class="gallery__folder-hover">
                        <h2 class="gallery__folder-title">{{ folder.fields.title }}</h2>
                    </div>
                    <img :src="folder.fields.coverImage.fields.file.url" class="gallery__folder-coverimage">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
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
            },
            goToPictures: function(index) {
                index = index + 1;
                return "/pics/" + index;
            }
        },
        computed: {
            ...mapGetters([
                'getFolders',
            ]),
        },
        mounted: function() {
            this.loadPictures();
        }
    }
</script>
