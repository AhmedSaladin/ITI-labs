const { edit_tempelate, disable_test_file, make_dir } = require("./helper");
const { writeFileSync, readFileSync } = require("fs");

exports.create_services_files = (name, options) => {
  let temp = readFileSync("./templates/service.txt", "utf-8");
  temp = edit_tempelate(temp, name);
  make_dir(name);

  writeFileSync(`./${name}/${name}-service.ts`, temp);

  if (!disable_test_file(options)) {
    writeFileSync(
      `./${name}/${name}-service-spec.ts`,
      ` // add your test cases here`
    );
  }
};
