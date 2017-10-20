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
