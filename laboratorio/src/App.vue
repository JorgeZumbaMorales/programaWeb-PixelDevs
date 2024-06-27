<template>
  <div class="Contenedor">
    <HelloWorld msg="TechReserve"/>    
    <img alt="Vue logo" src="./assets/Fondo.jpg">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './assets/css.css'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
