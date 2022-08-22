import { createRouter, createWebHistory } from 'vue-router'
import HomePageVue from "../Pages/HomePage.vue"
import RegisterPage from "../Pages/RegisterPage.vue"
import LoginPage from "../Pages/LoginPage.vue"

import addRecipe from "../components/addRecipe.vue"
import logedHomePage from "../Pages/logedHomePage.vue"
import recipeDetail from "../components/recipeDetail.vue"
import mainHeader from "../components/mainHeader.vue"
import profilePage from "../components/profilePage.vue"

const routes = [
 
  {
    path: '/signup',
    name: 'signup',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/recipe/:id',
    name: 'dashboard',
    component: recipeDetail,
    meta: {
      reload: true,
    },
  },

  {
    path: '/new',
    name: 'new',
    component: addRecipe
  },
  {
    path: '/loged/:id',
    name: 'loged',
    component: mainHeader,
    
  },
  
  {
    path: '/profile',
    name: 'profile',
    component: profilePage,
    
  },




]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router