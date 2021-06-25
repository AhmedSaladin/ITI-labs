const User = require("./user.model");
const mongoId = require("mongoose");
const fs = require("fs/promises");

module.exports = {
  get_all_users: (req, res, next) => {
    User.find({})
      .then((user) => {
        if (!user) res.status(404).json();
        else res.status(200).json(user);
      })
      .catch((err) => console.log(err));
  },

  get_user_details: (req, res, next) => {
    const id = req.params.id;
    if (mongoId.isValidObjectId(id)) {
      User.findOne({ _id: id })
        .then((user) => {
          if (!user) res.status(404).json();
          else res.status(200).json(user);
        })
        .catch((err) => console.log(err));
    } else res.status(404).json();
  },

  get_user_by_name: (req, res, next) => {
    const { name } = req.query;
    User.findOne({ name: `${name}` })
      .then((user) => {
        if (!user) res.status(404).json();
        else res.status(200).json(user);
      })
      .catch((err) => console.log(err));
  },

  create_new_user: (req, res, next) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      image: `/images/${req.file.filename}`,
    });
    user
      .save()
      .then(() => res.status(201).json())
      .catch((err) => console.log(err));
    res.status(200).json();
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
    if (mongoId.isValidObjectId(id)) {
      User.findOneAndRemove({ _id: id })
        .then((data) => {
          console.log(data);
          delete_images(data.image);
        })
        .catch((err) => console.log(err));
    } else res.status(404).json();
  },
};

function delete_images(image) {
  const current_image = image.split("/images/")[1];
  console.log(current_image);
  fs.unlink(`images/${current_image}`).catch((err) => console.error(err));
}
