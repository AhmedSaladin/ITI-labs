const { is_a_valid_command } = require("./helper");
const { generate_type } = require("./genetator");

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

interface();
