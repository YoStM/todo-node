const Express = require("express");
const URL = require("./src/routes/urlIndex");
const morgan = require("morgan");
const BodyParser = require("body-parser");
const DataBase = require("./src/db/sequelize");

const Server = Express();
const Port = process.env.PORT || 3000;

Server.use(morgan("dev")).use(BodyParser.json());

DataBase.init();

URL(Server, "/");
URL(Server, "/todo/:id");
URL(Server, "/new-todo");
URL(Server, "/update-todo/:id");
URL(Server, "/destroy-todo/:id");

Server.listen(Port, () => {
  console.log(`Le server est à l'écoute sur : http://localhost:${Port}`);
});
