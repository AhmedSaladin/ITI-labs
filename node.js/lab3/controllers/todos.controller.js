const Todo = require("../models/todo.model");
module.exports = {
  get_all_todos_view: (req, res, next) => {
    res.status(200).send("index.html");
  },

  get_all_todos: (req, res, next) => {
    Todo.find({})
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  },

  get_todo: (req, res, next) => {
    const _id = req.params.id;
    Todo.findOne({ _id })
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  },

  create_new_todo: (req, res, next) => {
    const { body } = req;
    const todo = new Todo(body);
    todo
      .save()
      .then(() => res.status(201).json())
      .catch((err) => next(err));
  },

  update_todo: (req, res, next) => {
    const _id = req.params.id;
    const { body } = req;
    const todo = {
      title: body.title,
      status: body.status,
      body: body.body | "  ",
      _id,
    };
    Todo.findOneAndReplace(_id, todo)
      .then(() => {
        res.status(200).json();
      })
      .catch((err) => next(err));
  },

  patch_todo: (req, res, next) => {
    const _id = req.params.id;
    const { body } = req;
    Todo.findOneAndUpdate(_id, body)
      .then(() => {
        res.status(200).json();
      })
      .catch((err) => next(err));
  },

  delete_todo: (req, res, next) => {
    const _id = req.params.id;
    Todo.findOneAndDelete({ _id })
      .then(() => res.status(200).json())
      .catch((err) => next(err));
  },
};
