<template>
  <div id="app">
    <div class="navbar">
      <!-- Utiliza <router-link> para navegar -->
      <router-link to="/inicio-sesion">Iniciar Sesión</router-link>
      <router-link to="/registrarse">Registrarse</router-link>
    </div>

    <!-- Componente dinámico que cambiará según la ruta actual -->
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import router from './router';

export default {
  name: 'App',
  //
  router,
  //
  components: {
    // Componentes adicionales aquí si es necesario
  }
};
</script>

<style>
/* Estilos globales de tu aplicación */
.navbar {
  background-color: #333;
  padding: 10px;
}
.navbar a {
  color: white;
  text-decoration: none;
  margin-right: 10px;
}
.navbar a:hover {
  color: yellow;
}
</style>
