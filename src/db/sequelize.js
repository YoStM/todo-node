const { Sequelize, DataTypes } = require("sequelize");
const TodoModel = require("../models/todo");

const sequelize = new Sequelize("todo_list", "*", "*", {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    timezone: "Etc/GMT-2",
  },
  logging: false,
});

const Todo = TodoModel(sequelize, DataTypes);

const init = () => {
  return sequelize.sync({ force: true }).then(() => {
    console.log("La base de données a bien été initialisée.");
  });
};

module.exports = {
  init,
  Todo,
};
