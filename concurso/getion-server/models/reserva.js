'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reserva.init({
    usuario_id: DataTypes.INTEGER,
    laboratorio_id: DataTypes.INTEGER,
    fecha_reserva: DataTypes.DATE,
    hora_inicio: DataTypes.TIME,
    hora_fin: DataTypes.TIME,
    motivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};