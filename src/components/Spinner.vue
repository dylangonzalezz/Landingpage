<template>
    <div class="spinner">
        <div v-show="visible">
            <div :class="stylize()"></div>
            <p>You may need to reload</p>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
            }
        },
        props: ['color','visible'],
        methods: {
            stylize: function() {
                return "spinner--" + this.color;
            }
        }
    }
</script>
