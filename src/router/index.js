import Vue from 'vue'
import Router from 'vue-router'
import Title from '../components/Title'
import Contact from '../components/ContactForm'
import Menu from '../components/Menu'
import GitHub from '../components/GitHub'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Video from '../components/Video'

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
        video: Video
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
          video: Video
      }
      }
  ]
})
