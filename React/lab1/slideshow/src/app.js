import Lab4 from "./components/lab4/lab4";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Lab3 from "./components/lab3/lab3";
// import Artist from "./components/lab3/artist/artist_details";
// import Lab1 from "./components/lab1/lab1";
// import Lab2 from "./components/lab2/lab2";
// import Add_user from "./components/lab2/add_user";
// import User_details from "./components/lab2/user_details";
// import Not_found from "./components/lab2/not_found";
// import Navbar from "./components/lab2/navbar";
import "./style.css";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider>
      <Lab4></Lab4>
    </Provider>
  );

  // return (
  //   <BrowserRouter>
  //     <Switch>
  //       <Route path="/artist/:id" component={Artist}></Route>
  //       <Route exact path="/" component={Lab3}></Route>
  //       <Route path="*" component={Not_found}></Route>
  //     </Switch>
  //   </BrowserRouter>
  // );

  // return (
  //   <BrowserRouter>
  //     <Navbar />
  //     <Switch>

  //       <Route path="/users/adduser" component={Add_user}></Route>
  //       <Route path="/users/:id" component={User_details}></Route>
  //       <Route exact path="/users" component={Lab2}></Route>
  //       <Route exact path="/" component={Lab1}></Route>
  //       <Route path="*" component={Not_found}></Route>
  //     </Switch>
  //   </BrowserRouter>
  // );
}

export default App;
