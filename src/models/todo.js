module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Todo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "La description de votre todo doit être renseigné.",
          },
          notNull: { msg: "Le description de votre todo est obligatoire." },
        },
      },
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      failed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      taskTime: {
        type: DataTypes.INTEGER,
        allowNUll: true,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
};
