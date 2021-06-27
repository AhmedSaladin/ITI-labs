const server = require("express")();
require("./app/app")(server);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
