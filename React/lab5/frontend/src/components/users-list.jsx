import { useSelector } from "react-redux";
import User from "./user";
export default function Users_list() {
  const users = useSelector((state) => state.users_list);
  if (users) {
    const users_view = users.map((user) => (
      <User info={user} key={user._id}></User>
    ));
    return users_view;
  }
  return <div className="container mx-auto">Not Found</div>;
}
