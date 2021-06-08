const { writeFileSync, readFileSync } = require("fs");
const {
  edit_tempelate,
  disable_test_file,
  make_dir,
  disable_css_file,
} = require("./helper");

exports.create_components_files = (name, options) => {
  let temp = readFileSync("./templates/component.txt", "utf-8");
  temp = edit_tempelate(temp, name);
  make_dir(name);

  writeFileSync(`./${name}/${name}-component.ts`, temp);

  if (!disable_test_file(options)) {
    writeFileSync(
      `./${name}/${name}-component.css`,
      `/* add your styles here */`
    );
  }
  writeFileSync(
    `./${name}/${name}-component.html`,
    `<p>${name}-component works<p>`
  );
  if (!disable_css_file(options)) {
    writeFileSync(
      `./${name}/${name}-component-spec.ts`,
      ` // add your test cases here`
    );
  }
};
