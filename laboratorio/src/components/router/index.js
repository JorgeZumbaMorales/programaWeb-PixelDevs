import Vue from 'vue';
import VueRouter from 'vue-router';
import InicioSesion from '../components/InicioSesion.vue';
import Registrarse from '../components/Registrarse.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/inicio-sesion'
  },
  {
    path: '/inicio-sesion',
    name: 'InicioSesion',
    component: InicioSesion
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: Registrarse
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
