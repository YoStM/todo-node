const { ValidationError } = require("sequelize");
const { Todo } = require("../models/todo");
module.exports = (server, url) => {
  server.post(url, (req, res) => {
    Todo.create(req.body)
      .then((todo) => {
        const message = `La todo ${req.body.id} a bien été créée.`;
      })
      .catch((error) => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: message.error, data: error });
        }
        const message =
          "La todo n'a pas pu être ajoutée. Réessayez dans quelques instants.";
        res.status(500).json({ message, data: error });
      });
  });
};
