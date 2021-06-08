const fs = require("fs");

const interface = () => {
  let args = process.argv.slice(2);
  args = args.map((arg) => arg.toLowerCase());
  const gen = args[0];
  const schematic = args[1];
  args = args.slice(2);

  const name = args.filter((arg) => {
    return !arg.startsWith("-");
  });

  const options = args.filter((arg) => {
    return arg.startsWith("-");
  });

  is_a_valid_command(gen);
  generate_type(schematic, name, options);
};

const is_a_valid_command = (arg) => {
  if (arg != "g" && arg != "generate")
    throw Error("Invalid argments enter g or generate.");
};

const generate_type = (arg, name, options) => {
  switch (arg) {
    case "service":
    case "s":
      create_services_files(name, options);
      break;
    case "component":
    case "c":
      create_components_files(name, options);
      break;
    default:
      throw Error("Invalid argments enter c or s.");
  }
};

const create_components_files = (name, options) => {
  let temp = fs.readFileSync("./component.txt", "utf-8");
  temp = edit_tempelate(temp, name);
  make_dir(name);

  fs.writeFileSync(`./${name}/${name}-component.ts`, temp);

  if (!disable_test_file(options)) {
    fs.writeFileSync(
      `./${name}/${name}-component.css`,
      `/* add your styles here */`
    );
  }
  fs.writeFileSync(
    `./${name}/${name}-component.html`,
    `<p>${name}-component works<p>`
  );
  if (!disable_css_file(options)) {
    fs.writeFileSync(
      `./${name}/${name}-component-spec.ts`,
      ` // add your test cases here`
    );
  }
};

const create_services_files = (name, options) => {
  let temp = fs.readFileSync("./service.txt", "utf-8");
  temp = edit_tempelate(temp, name);
  make_dir(name);
  fs.writeFileSync(`./${name}/${name}-service.ts`, temp);

  if (!disable_test_file(options)) {
    fs.writeFileSync(
      `./${name}/${name}-service-spec.ts`,
      ` // add your test cases here`
    );
  }
};

function make_dir(arg) {
  const dir = `./${arg}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function edit_tempelate(tempelate, name) {
  return tempelate.replace("Name", name);
}

function disable_css_file(options) {
  return options.includes("--inline-style");
}

function disable_test_file(options) {
  return options.includes("--skip-tests");
}

interface();
