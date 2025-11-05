module.exports = (sequelize, DataTypes) => {
  const Tentram = sequelize.define('hotel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
      allowNull: false
    },
    Tipe_Kamar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Kapasitas_Tamu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Lantai: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Fasilitas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tanggal_Pesan: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    tableName: 'hotel',
    freezeTableName: true,
    timestamps: true
  });
    return Tentram;
};