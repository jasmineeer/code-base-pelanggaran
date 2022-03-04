'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_pelanggaran_siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // relasi detail_pelanggaran_siswa => pelanggaran (child to parent)
      // key: id_pelanggaran
      // parent: pelanggaran
      // child: detail_pelanggaran_siswa
      // tipe: 1 detail_pelanggaran_siswa mencatat 1 data pelanggaran
      this.belongsTo(models.pelanggaran, {
        foreignKey: "id_pelanggaran",
        as: "pelanggaran"
      })

      // relasi detail_pelanggaran_siswa => pelanggaran_siswa (child to parent)
      // key: id_pelangggaran_siswa
      // parent: pelanggaran_siswa
      // child: detail_pelanggaran_siswa
      // tipe: 
      
    }
  }
  detail_pelanggaran_siswa.init({
    id_pelanggaran_siswa: DataTypes.INTEGER,
    id_pelanggaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detail_pelanggaran_siswa',
    tableName: 'detail_pelanggaran_siswa'
  });
  return detail_pelanggaran_siswa;
};