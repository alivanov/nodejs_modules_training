const app = {};
module.exports = app;

// require app from a test will not start the server
if (!module.parent) {
  app.listen(process.env.PORT || 3000);
}
