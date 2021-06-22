const User = require("./user.model");

module.exports = {
  get_all_users: (req, res, next) => {
    User.find({})
      .then((data) => res.status(200).json(data))
      .catch((err) => console.log(err));
  },
  get_user_details: (req, res, next) => {
    const id = req.params.id;
    User.findOne({ _id: id })
      .then((data) => res.status(200).json(data))
      .catch((err) => console.log(err));
  },
  create_new_user: (req, res, next) => {
    const user = new User(req.body);
    console.log(user);
    user
      .save()
      .then(() => res.status(201).json())
      .catch((err) => console.log(err));
  },
  update_user_details: (req, res, next) => {
    const id = req.params.id;
    const user = req.body;
    User.findOneAndUpdate({ _id: id }, user)
      .then(() => res.status(302).json())
      .catch((err) => console.log(err));
  },
  delete_user: (req, res, next) => {
    const id = req.params.id;
    User.findOneAndDelete({ _id: id })
      .then(() => res.status(302).json())
      .catch((err) => console.log(err));
  },
};
