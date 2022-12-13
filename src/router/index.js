import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import store from '../store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [

  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/reset',
    name: 'Reset',
    component: () => import('../views/ResetPas.vue')
  },
  {
    path:'/forget',
    name: 'Forget',
    component: () => import('../views/ForgetPas.vue')
  },
  {
    path: '/login1',
    name: 'login1',
    component: () => import('../views/login1.vue'),
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/index1',
    name: 'Index1',
    component: () => import('../views/index1.vue'),
    children: [{
        path: '/body',
        name: 'body',
        component: () => import('../views/body.vue')
      },
      {
        path: '',
        name: 'body',
        component: () => import('../views/body.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'resultlist',
        name: 'resultlist',
        component: () => import('../views/Result.vue')
      }
    ]
  },
  {
    // 未找到页面
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue'),
    children: [{
        path: '',
        name: 'home',
        component: () => import('../views/admin/index.vue'),
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/admin/index.vue'),
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import('../views/setting/index.vue')
      }
    ]
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/TablePage.vue')
  },
  {
    path: '/word',
    name: 'word',
    component: () => import('../views/WordCloud.vue')
  },
  {
    path: '/world',
    name: 'world',
    component: () => import('../views/world.vue')
  },
  {
    path: '/world1',
    name: 'world1',
    component: () => import('../views/world1.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ScrollListPage.vue')
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: () => import('../views/ScrollPage.vue')
  },
  {
    path: '/pie',
    name: 'pie',
    component: () => import('../views/PiePage.vue')
  },
  {
    path: '/searchresult',
    name: 'searchresult',
    component: () => import('../views/SearchResult.vue')
  },
  {
    path: '/searchanalysis',
    name: 'searchanalysis',
    component: () => import('../views/SearchAnalysis.vue')
  },
  {
    path: '/author',
    name: 'author',
    component: () => import('../views/Author.vue')
  }

]


// 登录鉴权
//白名单
const whiteList = ['/login1', '/forget', 'reset']

const router = createRouter({
  history: createWebHashHistory(), //路由模式
  routes //路由规则
})
// 前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start() //开始加载进度条
  console.log(store.state.user.token)
  // 用户已登录
  if (true) {
    //store.user.token

    // 不允许进入首页
    if (to.path === '/login1') {
      next() //   '/'
    } else {
      // 判断用户信息是否存在,不存在，则获取用户信息
      next()
    }
  }
  // 未登录
  else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login1')
    }
  }
})

router.afterEach(() => {
  nprogress.done(); //结束加载进度条
})

export default router