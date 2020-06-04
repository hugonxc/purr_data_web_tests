import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Console from '../components/console/Console.vue'
import Editor from '../components/editor/Editor.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: []
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/editor/:filename',
    name: 'editor',
    component: Editor
  },
  {
    path: '/console',
    name: 'console',
    component: Console
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
