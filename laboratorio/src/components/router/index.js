// Importa Vue y VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';

// Importa los componentes que quieres usar en las rutas
import InicioSesion from '../components/InicioSesion.vue';
import Registrarse from '../components/Registrarse.vue';

// Usa VueRouter en Vue
Vue.use(VueRouter);

// Define tus rutas
const routes = [
  {
    path: '/',
    redirect: '/inicio-sesion' // Redirige a inicio-sesion por defecto
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

// Crea una nueva instancia de VueRouter
const router = new VueRouter({
  mode: 'history', // Modo de historial para URLs limpias (requiere configuración adicional en el servidor)
  base: process.env.BASE_URL,
  routes
});

// Exporta la instancia de VueRouter para usarla en tu aplicación
export default router;
