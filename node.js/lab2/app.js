const http = require("http");
const { router } = require("./router");


http
  .createServer((req, res) => {
    router(req, res);
  })
  .listen(8000, () => console.log("server is running on port 8000"));
