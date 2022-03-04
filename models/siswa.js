'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // relasi siswa => pelanggaran_siswa (parent to child)
      // key: id_siswa
      // parent: siswa
      // child: pelanggaran_siswa
      this.hasMany(models.pelanggaran_siswa, {
        foreignKey: "id_siswa",
        as: "pelanggaran_siswa "
      })
    }
  }
  siswa.init({
    id_siswa:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nis: DataTypes.STRING,
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    poin: DataTypes.INTEGER,
    Image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: 'siswa'
  });
  return siswa;
};