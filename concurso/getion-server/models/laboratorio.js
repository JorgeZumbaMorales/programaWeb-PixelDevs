'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Laboratorio.init({
    nombre: DataTypes.STRING,
    capacidad: DataTypes.INTEGER,
    equipos_disponibles: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Laboratorio',
  });
  return Laboratorio;
};