// Importa Vue y VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';

// Importa los componentes que quieres usar en las rutas
import HelloWorld from './components/HelloWorld.vue'
import InicioSesion from '../components/InicioSesion.vue';
import Registrarse from '../components/Registrarse.vue';

// Usa VueRouter en Vue
Vue.use(VueRouter);

// Define tus rutas
const routes = [
    {
        path: '/HelloWord',
        name: 'HelloWord',
        component: HelloWorld
      },
  {
    path: '/iniciosesion',
    name: 'inicioSesion',
    component: InicioSesion
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: Registrarse
  }
];

const router = new VueRouter({
  mode: 'history', // Modo de historial para URLs limpias (requiere configuración adicional en el servidor)
  base: process.env.BASE_URL,
  routes
});

// Exporta la instancia de VueRouter para usarla en tu aplicación
export default router;
