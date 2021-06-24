import { useEffect } from "react";
import { useDispatch } from "react-redux";
import user_details from "../../actions/user_details";
import clear_details from "../../actions/clear_details";
import delete_user from "../../actions/delete_user";
import { useSelector } from "react-redux";

export default function User_details(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.details);

  useEffect(() => {
    dispatch(user_details(id));
    dispatch(clear_details());
  }, [dispatch, id]);

  const userUi = (user) => {
    console.log(user);
    if (user != null) {
      if (user.length === 0)
        return <div className="text-center fs-2  m-5">Not found</div>;
      return (
        <div className="container ">
          <div className="card mt-5">
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={user.image}
                  className="img-fluid rounded-start"
                  alt={user.name}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Name: {user.name}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <div className="">
                    <input
                      type="button"
                      value="Edit"
                      className="btn btn-primary ml-0 mr-2 mt-2 mb-2"
                    />
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-danger m-2"
                      onClick={() => {
                        dispatch(delete_user(id));
                        props.history.push("/");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="d-flex justify-content-center m-5">
        <div className="spinner-border text-info" role="status"></div>
      </div>
    );
  };

  return userUi(user);
}
