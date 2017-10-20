<template>
    <div class="content">
        <div class="content__container content__container--right">
            <div class="content__textcontainer">
                <div class="content__text">
                    <h1>U wot m8?</h1>
                    <p>
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                        The quick brown fox jumps over the lazy dog.
                    </p>
                </div>
            </div>
            <div class="content__imagecontainer" id="image1">
                <div class="content__imagelayout animated fadeInLeftShort">
                    <img src="../assets/ContentMedia/Media-1.png" class="content__image">
                </div>
            </div>
        </div>
        <div class="content__container content__container--left">
            <div class="content__imagecontainer" id="image2">
                <div class="content__imagelayout">
                    <img src="../assets/ContentMedia/Media-1.png" class="content__image">
                </div>
            </div>
            <div class="content__textcontainer">
                <div class="content__text">
                    Pomodoro is great
                </div>
            </div>
        </div>
        <div class="content__container content__container--right">
            <div class="content__textcontainer">
                <div class="content__text">
                    Sample Text
                </div>
            </div>
            <div class="content__imagecontainer" id="image3">
                <div class="content__imagelayout">
                    <img src="../assets/ContentMedia/Media-1.png" class="content__image">
                </div>
            </div>
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
</script>
