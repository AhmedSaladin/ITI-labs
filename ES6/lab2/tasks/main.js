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
const obj = {
  courseDuration: "50min",
  courseName: "Ali",
};
course_information(obj);
