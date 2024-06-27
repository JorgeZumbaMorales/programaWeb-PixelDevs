<template>
    <div class="InicioSesion">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="iniciarSesion">
        <div>
          <label for="usuario">Usuario:</label>
          <input type="text" id="usuario" v-model="usuario">
        </div>
        <div>
          <label for="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" v-model="contrasena">
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InicioSesion',
    data() {
      return {
        usuario: '',
        contrasena: ''
      };
    },
    methods: {
      iniciarSesion() {
        // Aquí puedes agregar la lógica para iniciar sesión
        console.log('Iniciar sesión con:', this.usuario, this.contrasena);
        // Por ejemplo, podrías enviar los datos a un servicio backend
        // y manejar la respuesta para redirigir al usuario si es exitoso
        // this.$router.push('/dashboard'); // Redirige a una página después del inicio de sesión
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para InicioSesion.vue */
  .InicioSesion {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .InicioSesion form {
    display: flex;
    flex-direction: column;
  }
  .InicioSesion label {
    margin-bottom: 8px;
  }
  .InicioSesion input {
    padding: 8px;
    margin-bottom: 16px;
  }
  .InicioSesion button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  .InicioSesion button:hover {
    background-color: #0056b3;
  }
  </style>
  