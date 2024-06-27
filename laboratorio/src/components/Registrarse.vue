<template>
    <div class="InicioSesion">
      <h1>{{ msg1 }}</h1>
      <p>Registrarse</p>
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