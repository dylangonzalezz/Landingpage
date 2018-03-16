<template>
  <div id="app">
    <transition appear name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="menu"></router-view>
    <router-view name="content"></router-view>
    <!--<router-view name="github"></router-view>-->
    <transition appear name="slide" mode="out-in">
      <router-view name="portfolio"></router-view>
      <router-view name="contact"></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Inconsolata');

#app {
  font-family: 'Inconsolata','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(65, 65, 65);
  position: relative;
  height: 100%;
}
body{
    margin: 0px;
}

.slide-enter {
    opacity: 0;
}

.slide-enter-active {
    transition: opacity 2s;
    /*animation: slide-in 2s ease-out forwards;*/
}
</style>
