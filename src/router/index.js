import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import Sidebar from '../components/Sidebar.vue';
import HomePage from '../components/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import VentePage from '../views/VentePage.vue';
import StockPage from '../views/StockPage.vue';
import CommandePage from '../views/CommandePage.vue';
import StatistiquePage from '../views/StatistiquePage.vue';

const routes = [
  {
    path: '/',
    components: {
      default: HomePage,
      sidebar: Sidebar,
    },
  },
  {
    path: '/vente',
    components: {
      default: VentePage,
      sidebar: Sidebar,
    },
  },
  {
    path: '/login',
    components: {
      default: LoginPage,
      sidebar: Sidebar,
    },
  },
  {
    path: '/stock',
    components: {
      default: StockPage,
      sidebar: Sidebar,
    },
  },
  {
    path: '/commande',
    components: {
      default: CommandePage,
      sidebar: Sidebar,
    },
  },
  {
    path: '/statistique',
    components: {
      default: StatistiquePage,
      sidebar: Sidebar,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
