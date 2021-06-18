import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StrictMode } from "react";
import reactDom from "react-dom";
import App from "./app";
import Lab1 from "./components/lab1/lab1";
import Lab2 from "./components/lab2/lab2";
import Add_user from "./components/lab2/add_user";
import User_details from "./components/lab2/user_details";
import Not_found from "./components/lab2/not_found";

reactDom.render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Switch>
        <Route path="/users/adduser" component={Add_user}></Route>
        <Route path="/users/:id" component={User_details}></Route>
        <Route exact path="/users" component={Lab2}></Route>
        <Route exact path="/" component={Lab1}></Route>
        <Route path="*" component={Not_found}></Route>
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
