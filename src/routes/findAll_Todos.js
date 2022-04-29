module.exports = (server, url) => {
  server.get(url, (req, res) => {
    res.send("HelloExpress from findAll_Todo!");
  });
};
