<template>
  <div class="Contenedor">
    <HelloWorld msg="TechReserve"/>    
    <img alt="Vue logo" src="./assets/Fondo.jpg">
  </div>

  <div>
    
  </div>
    <Sesion msg1="Iniciar Sesión"/>
  <div>
    <Registro msg2="Registrarse"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InicioSesion from './components/InicioSesion.vue'
import Registrarse from './components/Registrarse.vue'
import './assets/css.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InicioSesion,
    Registrarse
  }
}
</script>