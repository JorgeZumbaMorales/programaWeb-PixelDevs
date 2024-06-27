<template>
    <div class="Registrarse">
      <h2>Registrarse</h2>
      <form @submit.prevent="registrarse">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre">
        </div>
        <div>
          <label for="correo">Correo Electrónico:</label>
          <input type="email" id="correo" v-model="correo">
        </div>
        <div>
          <label for="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" v-model="contrasena">
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Registrarse',
    data() {
      return {
        nombre: '',
        correo: '',
        contrasena: ''
      };
    },
    methods: {
      registrarse() {
        // Aquí puedes agregar la lógica para registrarse
        console.log('Registrarse con:', this.nombre, this.correo, this.contrasena);
        // Por ejemplo, podrías enviar los datos a un servicio backend
        // y manejar la respuesta para redirigir al usuario si es exitoso
        // this.$router.push('/inicio-sesion'); // Redirige al inicio de sesión después de registrarse
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para Registrarse.vue */
  .Registrarse {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .Registrarse form {
    display: flex;
    flex-direction: column;
  }
  .Registrarse label {
    margin-bottom: 8px;
  }
  .Registrarse input {
    padding: 8px;
    margin-bottom: 16px;
  }
  .Registrarse button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
  }
  .Registrarse button:hover {
    background-color: #218838;
  }
  </style>
  