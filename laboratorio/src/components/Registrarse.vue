<template>
    <div class="Registrarse">
      <h1>{{ msg2 }}</h1>
      <p>Formulario de Registro</p>
      <router-link to="/inicio-sesion">Iniciar Sesión</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Registrarse',
    props: {
      msg2: String
    }
  };
  </script> 