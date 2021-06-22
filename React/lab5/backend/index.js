const server = require("express")();
require("./app/app")(server);
const PORT = 3001 || process.env.PORT;

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
