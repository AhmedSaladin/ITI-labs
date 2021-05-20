// 1- Create your own function that accepts multiple parameters to generate course information and display it
//      -Assume that the function accepts course information as object that contains courseName, courseDuation, courseOwner.
//      -if any of required field is not set in function call it should have default values as follows: courseName=”ES6” ,
//       courseDuration=”3days”, courseOwner=”JavaScript”.
//      -through exception if passed object includes properties other than those described above

const course_information = (obj) => {
  const default_obj = {
    courseName: "ES6",
    courseDuration: "3days",
    courseOwner: "JavaScript",
  };
  const new_obj = Object.assign({}, default_obj, obj);
  if (Object.keys(new_obj).toString() == Object.keys(default_obj).toString())
    return new_obj;
  else throw "Error object not valid";
};
const course_obj = {
  courseDuration: "50min",
  courseName: "Ali",
};
course_information(course_obj);

// 2- Create a generator that returns fibonacci series that takes only one parameter.
//   a. the parameter passed determines the number of elements displayed from the series.
function* number_of_elements(count) {
  let f1 = 0,
    f2 = 1;
  for (let i = 0; i < count; i++) {
    let temp;
    yield f1 + f2;
    temp = f1;
    f1 = f2;
    f2 = temp + f2;
  }
}

//   b.the parameter passed determines the max number of the displayed series should not exceed its value.
function* the_max_number(max) {
  let f = 1,
    f1 = 0,
    f2 = 1;
  while (f < max) {
    yield f;
    f1 = f2;
    f2 = f;
    f = f1 + f2;
  }
}
const noe = number_of_elements(5);
const tmn = the_max_number(10);

// 3- create your own object that has [Symbol.replace]
const replace_obj = {
  [Symbol.replace]: function (str) {
    if (str.length > 15) return str.substring(0, 15) + "...";
    else return str;
  },
};
let string1 = "one two three four five six seven".replace(replace_obj);
let string2 = "one two three".replace(replace_obj);

// 4- Create an iterable object by implementing @@iterator
iterator_obj = {
  name: "ali",
  age: 25,
  fav_color: "yellow",
  born: 1993,
  dis() {
    "ay 7aga ";
  },
  [Symbol.iterator]() {
    const o = Object.keys(this);
    const length = o.length;
    let i = -1;
    return {
      next: () => {
        i++;
        if (i < length) {
          return {
            value: [o[i], this[o[i]]],
            done: false,
          };
        }
        return {
          value: "3agwa",
          done: true,
        };
      },
    };
  },
};

console.log(...iterator_obj);
for (let k of iterator_obj) console.log(k);
