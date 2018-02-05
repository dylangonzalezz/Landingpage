<template>
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
              <h3 class="github__title">Some Github stats</h3>
            </div>
            <div class="github__stats">
              <div class="github__td"><b>Username:</b></div>
              <div class="github__td">{{ getGithubName }}</div>
            </div>
            <div class="github__stats">
              <div class="github__td"><b>Location:</b></div>
              <div class="github__td">{{ getGithubLocation }}</div>
            </div>
            <div class="github__stats">
              <div class="github__td"><b>Company:</b></div>
              <div class="github__td">{{ getGithubCompany }}</div>
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
