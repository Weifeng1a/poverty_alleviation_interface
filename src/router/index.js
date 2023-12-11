import { createRouter, createWebHistory } from 'vue-router'
import Chart from '../views/Chart'
import Home from '../views/Home'
import Login from '../views/Login'
import Main from '../views/Main'
import News from '../views/News'
import User from '../views/User'
import Project from '../views/Project'
const router =createRouter({
    history:createWebHistory(),
    routes:[
        {
          path:'/',
          component:Home,
          meta:{
            showTab:true
          }
        },
        {
          path:'/login',
          component:Login,
          meta:{
            showTab:true
          }
        },
        {
          path:'/main',
          component:Main,
          children:[
            {
              path:'user',
              component:User,
              meta:{
                title:"用户管理"
              }
            },
            {
              path:'project',
              component:Project,
              meta:{
                title:"项目申请"
              }
            }
          ],
          meta:{
            showTab:false
          }
        },
        {
          path:'/chart',
          component:Chart,
          meta:{
            showTab:true
          }
        },
        {
          path:'/news',
          component:News,
          meta:{
            showTab:true
          }
        }
    ],
     //定制路由滚动行为
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router