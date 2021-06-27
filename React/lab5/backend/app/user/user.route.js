const router = require("express").Router();
const user = require("./user.controller");
const upload = require("../multer");
router
  .get("/users", user.get_all_users)
  .get("/users/:id", user.get_user_details)
  .get("/users?", user.get_user_by_name)
  .post("/users", upload, user.create_new_user)
  .put("/users/:id", upload, user.update_user_details)
  .delete("/users/:id", user.delete_user);

module.exports = router;
