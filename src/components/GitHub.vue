<template>
  <div class="container-fluid github__container">
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-3 github__avatar--container">
        <div class="github__avatar--hovercontainer">
          <div class="github__avatar--hover1" :style="githubAvatar()"></div>
          <div class="github__avatar--hover2" :style="githubAvatar()"></div>
        </div>
        <div class="github__avatar" :style="githubAvatar()"></div>
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-4">
        <div class="row">
             <img src="../assets/icons/github.png" class="col github__icon"/>
             <h3 class="github__title">Github Stats:</h3>
        </div>
        <div class="github__stats">
          <div class="row github__stats">
            <div class="col-sm-6"><b>Username:</b></div>
            <div class="col-sm-6">{{ getGithubName }}</div>
          </div>
          <div class="row">
            <div class="col-sm-6"><b>Location:</b></div>
            <div class="col-sm-6">{{ getGithubLocation }}</div>
          </div>
          <div class="row">
            <div class="col-sm-6"><b>Company:</b></div>
            <div class="col-sm-6">{{ getGithubCompany }}</div>
          </div>
        </div>
      </div>
      <p v-show="getGithubLoading">Loading...</p>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
    data() {
        return{
            loading: false,
        }
    },
    methods: {
        loadGithub: function() {
            this.$store.dispatch('asyncChangeGithub');
        },
        githubAvatar() {
            return {
                backgroundImage: "url('" + this.getGithubAvatar + "')"
            };
        }
    },
    computed: {
        ...mapGetters([
            'getGithubName',
            'getGithubAvatar',
            'getGithubCompany',
            'getGithubLocation',
            'getGithubLoading'
        ]),
    },
    mounted: function() {
        this.loadGithub();
    }
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Special+Elite');

  .github{
    &__container{
      background-color: rgb(50, 50, 50);
      color: rgb(230, 230, 230);
    }
    &__title{
      text-align: center;
      font-family: 'Special Elite', Sans;
      border-bottom: solid 1px rgb(230, 230, 230);
    }
    &__avatar{
      height: 100%;
      width: 100%;
      background-size: 100%;
      background-repeat: no-repeat;
      filter: grayscale(100%);
      z-index: 1;
      &--hover1{
        position: absolute;
        height: 100%;
        width: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        filter: hue-rotate(340deg);
        z-index: 2;
        opacity: 0.2;
        right: 5px;

      }
      &--hover2{
        position: absolute;
        height: 100%;
        width: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        filter: hue-rotate(190deg);
        z-index: 3;
        opacity: 0.2;
        left: 5px;
      }
      &--hovercontainer{
        position: absolute;
        height: 50vh;
        width: 50vh;
        opacity: 0;
        z-index:4;
        padding: 0;
        &:hover{
          opacity: 1;
        }
      }
    }
    &__avatar--container{
      height: 50vh;
      width: 50vh;
      margin-left: auto;
      margin-right: auto;
      padding: 0;
      display: block;
        &:hover{

        }
    }
    &__icon{
      margin-top: 20px;
      height: 70px;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }
    &__stats{
      margin-top: 40px;
      font-family: 'Special Elite', Sans;
    }
    &__stats--info{
    }
    &__stats--labels{
    }
}
@media (max-width: 768px)  {
    .github{
      &__container {
        width: 100%;
        height: auto;
      }
      &__avatar--container{
        height: 90vw;
        width: 90vw;
        float: left;
        margin-left: 3.5%;
      }
      &__stats{
      }
      &__stats{
        text-align: center;
      }
    }
}

@media (max-height: 550px)  {
    .github{
      &__container{
        height: auto;
      }
      &__avatar--container{
      }
      &__stats{
      }
    }
}
</style>
