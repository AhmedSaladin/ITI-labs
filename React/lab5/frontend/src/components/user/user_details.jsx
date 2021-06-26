import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import user_details from "../../actions/user_details";
import clear_details from "../../actions/clear_details";
import delete_user from "../../actions/delete_user";
import Edit from "./edit_form";
import Loading from "../loading";

export default function User_details(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.details);

  useEffect(() => {
    dispatch(user_details(id));
    dispatch(clear_details());
  }, [dispatch, id]);

  const user_card = (user) => {
    return (
      <div className="container ">
        <div className="card mt-5">
          <div className="row g-0">
            <div className="col-md-6 col-xl-4">
              <img
                src={`http://localhost:3001${user.image}`}
                className="img-fluid rounded-start"
                alt={user.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Name: {user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <div className="d-flex">
                  <Edit info={user} />
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger m-2"
                    onClick={() => {
                      const ans = window.confirm("Are you Sure?");
                      if (ans) {
                        dispatch(delete_user(id));
                        props.history.replace("/");
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const userUI = (user) => {
    if (user != null) {
      if (user.length === 0)
        return <div className="text-center fs-2  m-5">Not found</div>;
      else return user_card(user);
    }
    return <Loading />;
  };

  return userUI(user);
}
