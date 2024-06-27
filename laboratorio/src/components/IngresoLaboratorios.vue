<template>
  <div class="RegistrarLaboratorio">
    <h2>Registrar Laboratorio</h2>
    <form @submit.prevent="registrarLaboratorio">
      <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div>
        <label for="capacidad">Capacidad:</label>
        <input type="number" id="capacidad" v-model.number="capacidad" required>
      </div>
      <div>
        <label for="equiposDisponibles">Equipos Disponibles:</label>
        <input type="number" id="equiposDisponibles" v-model.number="equiposDisponibles" required>
      </div>
      <button type="submit">Registrar laboratorio</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegistrarLaboratorio',
  data() {
    return {
      nombre: '',
      capacidad: 0,
      equiposDisponibles: 0
    };
  },
  methods: {
    registrarLaboratorio() {
      // Aquí puedes agregar la lógica para enviar los datos a tu backend
      console.log('Registrando laboratorio con:', this.nombre, this.capacidad, this.equiposDisponibles);
      // Ejemplo de cómo podrías enviar los datos usando axios
      /*
      axios.post('/api/registrarLaboratorio', {
        nombre: this.nombre,
        capacidad: this.capacidad,
        equiposDisponibles: this.equiposDisponibles
      })
      .then(response => {
        console.log(response.data);
        // Aquí podrías manejar la respuesta del servidor, como redirigir o mostrar un mensaje de éxito
      })
      .catch(error => {
        console.error('Error al registrar laboratorio:', error);
        // Aquí manejarías el error, como mostrar un mensaje de error al usuario
      });
      */
    }
  }
};
</script>

<style scoped>
.RegistrarLaboratorio {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.RegistrarLaboratorio form {
  display: flex;
  flex-direction: column;
}
.RegistrarLaboratorio label {
  margin-bottom: 8px;
}
.RegistrarLaboratorio input {
  padding: 8px;
  margin-bottom: 16px;
}
.RegistrarLaboratorio button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
.RegistrarLaboratorio button:hover {
  background-color: #218838;
}
</style>
