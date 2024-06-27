const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Aquí van las rutas

sequelize.sync()
  .then(() => {
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  })
  .catch(err => console.error('Unable to connect to the database:', err));
