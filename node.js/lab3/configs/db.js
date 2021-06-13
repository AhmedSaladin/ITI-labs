const mongose = require("mongoose");
const url =
  "mongodb://iti:iti123456789@tailor-shard-00-00.o7ln9.mongodb.net:27017,tailor-shard-00-01.o7ln9.mongodb.net:27017,tailor-shard-00-02.o7ln9.mongodb.net:27017/node?ssl=true&replicaSet=atlas-q1xtzx-shard-0&authSource=admin&retryWrites=true&w=majority";
mongose
  .connect(url, { useUnifiedTopology: true, NewUrlParser: true })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));
