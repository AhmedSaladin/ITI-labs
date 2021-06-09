const { files_route } = require("./files_router");
const fs = require("fs/promises");

let files;
fs.readdir("./files")
  .then((data) => {
    files = data;
  })
  .catch((err) => {
    console.error(err);
  });

exports.router = (req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.setHeader("content-type", "text/html");
      files.map((file) => {
        res.write(`<li><a href="${file}">${file}</a></li><br>`);
      });
      res.end();
      break;

    default:
      files_route(url, res, files);
      break;
  }
};
