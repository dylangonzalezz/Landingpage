<template>
  <div id="app">
    <transition appear name="slide" mode="out-in">
    <router-view></router-view>
    </transition>
    <router-view name="menu"></router-view>
    <router-view name="content"></router-view>
    <router-view name="github"></router-view>
    <transition appear name="slide" mode="out-in">
      <router-view name="contact"></router-view>
      <router-view name="footer"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(65, 65, 65);
  position: relative;
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
/*.slide-leave {
  opacity: 1;
}

.slide-leave-active {
    !*animation: slide-out 1s ease-out forwards;*!
    transition: opacity 1s;
    opacity: 0;
}*/

/*@keyframes slide-in {
    from {
        transform: translateX(20px);
    } to {
          transform: translateX(0px);
      }
}

@keyframes slide-out {
    from {
        transform: translateX(0px);
    } to {
          transform: translateX(20px);
      }
}*/
</style>
