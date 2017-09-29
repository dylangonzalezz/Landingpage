<template>
  <div class="menu__container">
      <ul class="menu__navigation">
          <router-link to="contact" rel="noopener">
              <li class="menu__button menu__button--contact" >
                  <img src="../assets/icons/contact.png" class="button__image button__image--contact"/><p class="button__text button__text--contact">Contact</p>
              </li>
          </router-link>
          <a href="https://www.instagram.com/dylonski" target="_blank" rel="noopener">
          <li class="menu__button menu__button--instagram">
              <img src="../assets/icons/instagram.png" class="button__image button__image--instagram"/><p class="button__text button__text--instagram">Instagram</p>
          </li>
          </a>
          <a href="https://github.com/dylangonzalezz" target="_blank" rel="noopener">
              <li class="menu__button menu__button--github">
                  <img src="../assets/icons/github.png" class="button__image button__image--github"/><p class="button__text button__text--github">GitHub</p>
              </li>
          </a>
      </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">

.menu{

    &__container {
        position: absolute;
        top: 0;
        color: whitesmoke;
        margin: 20px;
    }
    &__navigation{
        padding: 0;
        list-style: none;
    }
}

.menu__button{
    list-style: none;
    width: 150px;
    height: 60px;

    &--contact{
    }
    &--instagram{
    }
    &--github{
    }
}

.button__image{
    float: left;
    width: 30px;
    height: 30px;

    &--contact {
    }
    &--instagram {
    }
    &--github {
    }
 }

.button__text{
    padding-top: 5px;
    float: left;
    padding-left: 10px;
    color: whitesmoke;

    &--contact{
    }
    &--instagram {
    }
    &--github {
    }
    &:hover{
        color: dimgray;
    }
}

@media (max-width: 480px) {
    .button__text{
        display: none;
    }
    .button__image{
        width: 25px;
        height: 25px;
    }
    .menu__button{
        width: 30px;
        height: 30px;
        margin-top: 15px;
    }
}
</style>
