<template>
    <div class="InicioSesion">
      <h1>{{ msg2 }}</h1>
      <p>Iniciar Sesión</p>
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