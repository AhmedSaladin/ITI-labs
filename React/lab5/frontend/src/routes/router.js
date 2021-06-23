import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "../components/404/404";
import Home from "../components/home";
import UserDetails from "../components/user_details";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users/:id" component={UserDetails}></Route>
        <Route path="/" component={Home} exact></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}
