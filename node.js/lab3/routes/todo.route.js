const router = require("express").Router();
const todo = require("../controllers/todos.controller");

router
  .get("/", todo.get_all_todos_view)
  .get("/todos", todo.get_all_todos)
  .get("/todos/:id", todo.get_todo)
  .post("/todos", todo.create_new_todo)
  .put("/todos/:id", todo.update_todo)
  .patch("/todos/:id", todo.patch_todo)
  .delete("/todos/:id", todo.delete_todo);
module.exports = router;
