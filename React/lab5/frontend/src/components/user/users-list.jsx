import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import users_list from "../../actions/users_list";
import clear_users_list from "../../actions/clear_users_list";
import User from "./user";
import Loading from "../loading";

export default function Users_list() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  useEffect(() => {
    dispatch(users_list(""));
    dispatch(clear_users_list());
  }, [dispatch]);

  const users_view = (users) => {
    if (users.length > 0)
      return users.map((user) => <User info={user} key={user._id}></User>);

    if (users.length === 0)
      return <div className="text-center fs-2">Not found</div>;

    return <User info={users} key={users._id}></User>;
  };

  if (users) return users_view(users);
  else return <Loading />;
}
