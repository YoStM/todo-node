module.exports = (server, url) => {
  server.get(url, (req, res) => {
    res.send("HelloExpress from findByPk_Todo!");
  });
};
