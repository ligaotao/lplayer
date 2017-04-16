import Login from 'views/Login'
import index from 'views/index'
import NewList from 'views/NewList'
export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: index,
    childRoutes: [
      {
        path: '/index/new_list',
        component: NewList
      }
    ]
  }
]
