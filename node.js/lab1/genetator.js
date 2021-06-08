const { create_components_files } = require("./component");
const { create_services_files } = require("./service");

exports.generate_type = (arg, name, options) => {
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
