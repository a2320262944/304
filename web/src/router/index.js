/* global localStorage */

import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

import EmailUser from '../components/searchAction/EmailUser.vue'
import ResultEmail from '../components/searchResult/ResultEmail.vue'
import AddGame from '../components/Game/AddGame.vue'
import ListGame from '../components/Game/ListGame.vue'
import EditGame from '../components/Game/EditGame.vue'
import SearchGame from '../components/searchAction/SearchGame.vue'
import E3Game from '../components/searchAction/E3Game.vue'
import ResultE3 from '../components/searchResult/ResultE3.vue'
import NameGame from '../components/searchAction/NameGame.vue'
import ResultName from '../components/searchResult/ResultName.vue'
import CreatorGame from '../components/searchAction/CreatorGame.vue'
import ResultCreator from '../components/searchResult/ResultCreator.vue'
import ToolGame from '../components/searchAction/ToolGame.vue'
import ResultTool from '../components/searchResult/ResultTool.vue'
import DLCGame from '../components/searchAction/DLCGame.vue'
import ResultDLC from '../components/searchResult/ResultDLC.vue'

Vue.use(Router)
Vue.use(VueAxios, axios)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component (resolve) {
        require.ensure(['@/components/Login.vue'], () => {
          resolve(require('@/components/Login.vue'))
        })
      }
    },
    {
      path: '/register',
      name: 'register',
      component (resolve) {
        require.ensure(['@/components/Register.vue'], () => {
          resolve(require('@/components/Register.vue'))
        })
      }
    },
    {
      name: 'searchEmail',
      path: '/searchEmail',
      component: EmailUser
    },
    {
      name: 'resultEmail',
      path: '/resultEmail',
      component: ResultEmail
    },
    {
      name: 'addGame',
      path: '/addGame',
      component: AddGame
    },
    {
      name: 'games',
      path: '/games',
      component: ListGame
    },
    {
      name: 'editGame',
      path: '/editGame/:id',
      component: EditGame
    },
    {
      name: 'searchGame',
      path: '/searchGame',
      component: SearchGame
    },
    {
      name: 'searchE3',
      path: '/searchE3',
      component: E3Game
    },
    {
      name: 'resultE3',
      path: '/resultE3',
      component: ResultE3
    },
    {
      name: 'searchName',
      path: '/searchName',
      component: NameGame
    },
    {
      name: 'resultName',
      path: '/resultName',
      component: ResultName
    },
    {
      name: 'searchCreator',
      path: '/searchCreator',
      component: CreatorGame
    },
    {
      name: 'resultCreator',
      path: '/resultCreator',
      component: ResultCreator
    },
    {
      name: 'searchTool',
      path: '/searchTool',
      component: ToolGame
    },
    {
      name: 'resultTool',
      path: '/resultTool',
      component: ResultTool
    },
    {
      name: 'searchDLC',
      path: '/searchDLC',
      component: DLCGame
    },
    {
      name: 'resultDLC',
      path: '/resultDLC',
      component: ResultDLC
    },
    {
      path: '*',
      component (resolve) {
        require.ensure(['@/components/404.vue'], () => {
          resolve(require('@/components/404.vue'))
        })
      },
      hidden: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
