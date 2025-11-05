module.exports = (sequelize, DataTypes) => {
  const Tentram = sequelize.define('Komik', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true,
      allowNull: false
    },
    Tipe_Kamar: {
      type: DataTypes.VARCHAR(50),
      allowNull: false
    },
    Kapasitas_Tamu: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Lantai: {
      type: DataTypes.VARCHAR(50),
      allowNull: false
    },
    Fasilitas: {
      type: DataTypes.VARCHAR(50),
      allowNull: false
    },
  }, {
    tableName: 'hotel',
    freezeTableName: true,
    timestamps: true
  });
    return Tentram;
};