const getAllTodos = require("./findAll_Todos");
const getOneTodoByPk = require("./findByPk_Todo");
const createNewTodo = require("./create_Todo");
const updateTodoByPk = require("./update_Todo");
const destroyTodoByPk = require("./destroy_Todo");

module.exports = (server, url) => {
  switch (url) {
    case "/":
      getAllTodos(server, url);
      break;
    case "/todo/:id":
      getOneTodoByPk(server, url);
      break;
    case "/new-todo":
      createNewTodo(server, url);
      break;
    case "/update-todo/:id":
      updateTodoByPk(server, url);
      break;
    case "/destroy-todo/:id":
      destroyTodoByPk(server, url);
      break;
    default:
      sendJsonRes();
  }
};

function sendJsonRes() {
  server.get("/error", (req, res) => {
    res
      .status(404)
      .json({ msg: "Cette url n'existe pas, merci de saisir une autre url!" });
  });
}
