require("./configs/db");
const express = require("express");
const morgan = require("morgan");
const app = express();
const routes = require("./routes/todo.route");
const error = require("./middlewares/error");
const not_found = require("./middlewares/not_found");

app.use(morgan("dev"));
app.use(express.static("assests"));
app.use(express.json());
app.use(routes);
app.use(error);
app.use(not_found);

const PORT = 3000 | process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
