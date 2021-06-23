const router = require("express").Router();
const user = require("./user.controller");

router
  .get("/", user.get_all_users)
  .get("/users/:id", user.get_user_details)
  .get("/users?", user.get_user_by_name)
  .post("/users", user.create_new_user)
  .put("/users/:id", user.update_user_details)
  .delete("/users/:id", user.delete_user);

module.exports = router;
