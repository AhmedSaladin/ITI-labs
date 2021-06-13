const mongoose = require("mongoose");
module.exports = mongoose.model("Todo", {
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["DONE", "INPROGRESS", "PENDING"],
  },
  body: String,
});
