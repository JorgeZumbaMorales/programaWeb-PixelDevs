<template>
    <div class="InicioSesion">
      <h1>{{ msg1 }}</h1>
      <p>Sistema de Reserva y Gestión de Laboratorios de Computación</p>
      <ul>
        <li><router-link to="/registrarse">Registrarse</router-link></li>
      </ul>
    </div>
  </template>
  
<script>
    export default {
        name: 'InicioSesion',
        props: {
            msg1: String
        }
    };
</script>