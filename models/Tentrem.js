module.exports = (sequelize, DataTypes) => {
  const Tentrem = sequelize.define('Tentrem', {
    Tipe_Kamar: { type: DataTypes.STRING, allowNull: false },
    Kapasitas_Tamu: { type: DataTypes.INTEGER, allowNull: false },
    Lantai: { type: DataTypes.INTEGER, allowNull: false },
    Fasilitas: { type: DataTypes.STRING, allowNull: true },
    Tanggal_Pesan: { type: DataTypes.DATEONLY, allowNull: false },
  }, {
    tableName: 'tentrem',
    timestamps: false,
  });

  return Tentrem;
};
