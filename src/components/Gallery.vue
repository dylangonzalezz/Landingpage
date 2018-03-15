<template>
    <div class="gallery">
        <h2 class="gallery__title">Pics</h2>
        <div class="gallery__container">
            <div v-for="(folder, index) in getImageFolders()" class="gallery__container-folder">
                <div v-on:click="goToPictures(index)" class="gallery__folder">
                    <div class="gallery__folder-hover">
                        <h2 class="gallery__folder-title">{{ folder.fields.title }}</h2>
                    </div>
                    <!--<p>{{ folder.fields.description }}</p>-->
                    <!--<p>{{ folder.fields.coverImage.fields.url }}</p>-->
                    <!--<p>{{ folder.fields.coverImage.fields.file.url }}</p>-->
                    <img :src="folder.fields.coverImage.fields.file.url" class="gallery__folder-coverimage">
                    <!--<p>{{ folder.fields.images.length }}</p>-->
                    <!--<p>{{ folder.sys.id }}</p>-->
                </div>
            </div>
        </div>
        <!--<p>Get Folders:</p>-->
        <!--<p>{{ getFolders }}</p>-->
        <!--<div v-for="folder in getFolders">-->
            <!--<p>Folder</p>-->
        <!--</div>-->
        <!--<p>fefe</p>-->
        <!--<div v-on:click="loadPictures">Click</div>-->
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
//                var kek = client.getEntries({'content_type': 'allImageFolders'});
//                var arrayy = ["fefe"];
//                var i = 0;
//                kek.then(function (response) {
//                    // console.log(response);
//                    // console.log(response.items[0].fields.imageFolders);
//                    // state.folderCount = response.items[0].fields.imageFolders.length;
//                    response.items[0].fields.imageFolders.forEach(function(folder) {
//                        console.log(folder);
//                        arrayy[i] = folder;
//                        i++;
//                    });
//
//                }).catch(function (error) {
//                    console.log(error);
//                });
//                this.foldercount = arrayy;
            },
            getImageFolders: function() {
                if( this.$store.getters.getFolders.items ) {
                    return this.$store.getters.getFolders.items[0].fields.imageFolders;
                }
            },
            goToPictures: function(index) {
                index = index + 1;
                this.$router.push("/pics/" + index);
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
