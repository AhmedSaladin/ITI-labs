exports.sum = function (vals) {
  let sum = 0;

  vals.forEach((val) => {
    sum += val;
  });

  return sum;
};

exports.positive = function (vals) {
  return vals.filter((x) => {
    return x > 0;
  });
};
