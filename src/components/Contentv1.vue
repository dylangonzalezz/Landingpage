<template>
  <div class="container-fluid content__container">
    <div class="row content__slide content__slide--one">
      <div class="content__title--container col-sm-6">
        <h1 class="content__title content__title--one">"Hey B whats poppin?"</h1>
      </div>
      <div class="content__image--container col-sm-5">
          <img src="../assets/ContentMedia/Media-1.png" class="content__image content__image--one"/>
      </div>
    </div>
    <div class="row no-gutters content__slide content__slide--two">
      <div class="col-sm-1"></div>
      <div class="col-sm-5">
        <div class="content__image content__image--two">Placeholder Image</div>
      </div>
      <div class="col-sm-6">Content</div>
    </div>
    <div class="row no-gutters content__slide content__slide--three">
      <div class="col-sm-1"></div>
      <div class="col-sm-5" style="z-index:20;">Content</div>
      <div class="col-sm-5">
        <div class="content__image content__image--three">Placeholder Image</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .no-gutters {
    margin-right: 0;
    margin-left: 0;

    > .col,
    > [class*="col-"] {
      padding-right: 0;
      padding-left: 0;
    }
  }

  .content {
    &__slide {
    }
    &__title {
      text-align: center;
      padding-top: 50%;
      &--container {
        position: relative;
      }
    }
    &__image {
      background-color: #27AE60;
      height: 101vh;
      &--one {
        width: auto;
        height: 80%;
        position: absolute;
        margin: auto 0 auto 0;
        -webkit-transition: .4s;
        -moz-transition: .4s;
        -o-transition: .4s;
        transition: .4s;
        background: none;
        &:hover {
          -webkit-transform: scale(1.05);
          -moz-transform: scale(1.05);
          -ms-transform: scale(1.05);
          -o-transform: scale(1.05);
          transform: scale(1.05);
          -webkit-transition: .4s;
          -moz-transition: .4s;
          -o-transition: .4s;
          transition: .4s;
        }
      }
      &--two {
        &::before {
          content: "This Image is Green";
          height: 100%;
          width: 100%;
          position: absolute;
          background-color: #FF004F;
          -webkit-transition: .4s;
          -moz-transition: .4s;
          -o-transition: .4s;
          transition: .4s;
          -webkit-transform: translate(-100%, 0);
          -moz-transform: translate(-100%, 0);
          -ms-transform: translate(-100%, 0);
          -o-transform: translate(-100%, 0);
          transform: translate(-100%, 0);
        }
        &::after {
          position: absolute;
          background-color: white;
          height: 100%;
          width: 101%;
          content: '';
          left: -101%;
        }
        &:hover {
          &::before {
            -webkit-transform: translate(0, 0);
            -moz-transform: translate(0, 0);
            -ms-transform: translate(0, 0);
            -o-transform: translate(0, 0);
            transform: translate(0, 0);
          }
        }
      }
      &--three {
        &::before {
          content: "This Image is also Green";
          height: 100%;
          width: 100%;
          position: absolute;
          background-color: dodgerblue;
          -webkit-transition: .4s;
          -moz-transition: .4s;
          -o-transition: .4s;
          transition: .4s;
          -webkit-transform: translate(-100%,0);
          -moz-transform: translate(-100%,0);
          -ms-transform: translate(-100%,0);
          -o-transform: translate(-100%,0);
          transform: translate(-100%,0);
        }
        &::after {
          position: absolute;
          background-color: white;
          height: 100%;
          width: 101%;
          content: '';
          left: -101%;
          overflow: hidden;
        }
        &:hover {
          &::before {
            -webkit-transform: translate(0, 0);
            -moz-transform: translate(0, 0);
            -ms-transform: translate(0, 0);
            -o-transform: translate(0, 0);
            transform: translate(0, 0);
          }
        }
      }
      &--container {
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

</style>
