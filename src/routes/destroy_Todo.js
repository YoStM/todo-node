module.exports = (server, url) => {
  server.post(url, (req, res) => {
    res.send("HelloExpress from destroy_Todo.js!");
  });
};
