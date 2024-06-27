'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HorariosLaboratorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HorariosLaboratorio.init({
    laboratorio_id: DataTypes.INTEGER,
    dia_semana: DataTypes.INTEGER,
    hora_apertura: DataTypes.TIME,
    hora_cierre: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'HorariosLaboratorio',
  });
  return HorariosLaboratorio;
};