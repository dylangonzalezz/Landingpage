import Vue from 'vue'
import Router from 'vue-router'
import Title from '../components/Title'
import Contact from '../components/ContactForm'
import Menu from '../components/Menu'
import GitHub from '../components/GitHub'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Videos from '../components/Videos'
import Gallery from '../components/Gallery'
import PictureFolder from '../components/PictureFolder'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Title',
      components: {
        default: Title,
        menu: Menu,
        github: GitHub,
        content: Content,
        footer: Footer,
        video: Videos,
        gallery: Gallery
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      components: {contact: Contact}
    },
    {
      path: '*',
      components: {
          default: Title,
          menu: Menu,
          github: GitHub,
          content: Content,
          footer: Footer,
          video: Videos,
          gallery: Gallery
      }
    },
    {
      path: '/pics/:id',
      name: 'Pics',
      components: {default: PictureFolder}
    }
  ]
})
