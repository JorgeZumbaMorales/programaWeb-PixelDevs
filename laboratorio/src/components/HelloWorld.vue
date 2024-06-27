<template>
  <div class="Hello">
    <h1>{{ msg }}</h1>
    <p>Sistema de Reserva y Gestión de Laboratorios de Computación</p>
      <li><a href="/InicioSesion.vue" target="_blank" rel="noopener">Iniciar Sesión</a></li>
      <li><a href="components/Registrarse.vue" target="_blank" rel="noopener">Registrarse</a></li>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>