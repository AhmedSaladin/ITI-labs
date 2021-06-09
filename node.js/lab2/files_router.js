const fs = require("fs/promises");

exports.files_route = (req, res, files) => {
  files.find((u) => {
    if (`/${u}` == req) {
      fs.readFile(`./files/${u}`)
        .then((file) => {
          res.write(file);
          res.end();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
};
