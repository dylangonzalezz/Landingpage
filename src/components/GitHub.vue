<template>
  <!--<div class="container-fluid github__container">-->
    <!--<div class="row">-->
      <!--<div class="col-sm-1"></div>-->
      <!--<div class="col-sm-3 github__avatar&#45;&#45;container">-->
        <!--<div class="github__avatar&#45;&#45;hovercontainer">-->
          <!--<div class="github__avatar&#45;&#45;hover1" :style="githubAvatar()"></div>-->
          <!--<div class="github__avatar&#45;&#45;hover2" :style="githubAvatar()"></div>-->
        <!--</div>-->
        <!--<div class="github__avatar" :style="githubAvatar()"></div>-->
      <!--</div>-->
      <!--<div class="col-sm-2"></div>-->
      <!--<div class="col-sm-4">-->
        <!--<div class="row">-->
             <!--<img src="../assets/icons/github.png" class="col github__icon"/>-->
             <!--<h3 class="github__title">Github Stats:</h3>-->
        <!--</div>-->
        <!--<div class="github__stats">-->
          <!--<div class="row github__stats">-->
            <!--<div class="col-sm-6"><b>Username:</b></div>-->
            <!--<div class="col-sm-6">{{ getGithubName }}</div>-->
          <!--</div>-->
          <!--<div class="row">-->
            <!--<div class="col-sm-6"><b>Location:</b></div>-->
            <!--<div class="col-sm-6">{{ getGithubLocation }}</div>-->
          <!--</div>-->
          <!--<div class="row">-->
            <!--<div class="col-sm-6"><b>Company:</b></div>-->
            <!--<div class="col-sm-6">{{ getGithubCompany }}</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<p v-show="getGithubLoading">Loading...</p>-->
  <!--</div>-->
  <!--</div>-->

  <div class="github">
      <div class="github__container">
          <div class="github__contentcontainer">
              <div class="github__avatar--hovercontainer">
                <div class="github__avatar--hover1" :style="githubAvatar()"></div>
                <div class="github__avatar--hover2" :style="githubAvatar()"></div>
              </div>
              <div class="github__avatar" :style="githubAvatar()"></div>
          </div>
      </div>
      <div class="github__container">
        <div class="github__contentcontainer">
          <div>
            <div class="github__titlecontainer">
              <img src="../assets/icons/github.png" class="col github__icon"/>
              <h3 class="github__title">Github stats</h3>
            </div>
            <div class="row github__stats">
            <div class="col-sm-6"><b>Username:</b></div>
            <div class="col-sm-6">{{ getGithubName }}</div>
            </div>
            <div class="row github__stats">
            <div class="col-sm-6"><b>Location:</b></div>
            <div class="col-sm-6">{{ getGithubLocation }}</div>
            </div>
            <div class="row github__stats">
            <div class="col-sm-6"><b>Company:</b></div>
            <div class="col-sm-6">{{ getGithubCompany }}</div>
            </div>
          </div>
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
