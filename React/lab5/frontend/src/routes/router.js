import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "../components/404/404";
import Home from "../components/home";
import UserDetails from "../components/user/user_details";

import NavBar from "../components/navbar";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/users/:id" component={UserDetails}></Route>
        <Route path="/" component={Home} exact></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
