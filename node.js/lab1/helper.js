const { existsSync, mkdirSync } = require("fs");

exports.make_dir = (arg) => {
  const dir = `./${arg}`;
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
};

exports.edit_tempelate = (tempelate, name) => {
  return tempelate.replace("Name", name);
};

exports.disable_css_file = (options) => {
  return options.includes("--inline-style");
};

exports.disable_test_file = (options) => {
  return options.includes("--skip-tests");
};

exports.is_a_valid_command = (arg) => {
  if (arg != "g" && arg != "generate")
    throw Error("Invalid argments enter g or generate.");
};
