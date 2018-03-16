<template>
    <div class="portfolio">
        <h1 class="portfolio__title">Stuff i've done</h1>
        <h3 class="portfolio__subtitle">Portfolio</h3>
        <app-videos></app-videos>
        <app-gallery></app-gallery>
    </div>
</template>
<script>
    import Gallery from './gallery.vue';
    import Videos from './videos.vue';

    export default {
        name: 'portfolio',
        data: function() {
            return {
            }
        },
        components: {
            appGallery: Gallery,
            appVideos: Videos,
        },
    }
</script>