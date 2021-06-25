import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import users_list from "../../actions/users_list";
import clear_users_list from "../../actions/clear_users_list";

import User from "./user";
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

  const loading = () => {
    return (
      <div className="d-flex justify-content-center m-5">
        <div className="spinner-border text-info" role="status"></div>
      </div>
    );
  };

  if (users) return <div className="container">{users_view(users)}</div>;
  else return loading();
}
