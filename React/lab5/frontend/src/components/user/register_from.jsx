import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import create_new_user from "../../actions/create_new_user";

export default function Register_model(props) {
  console.log(props);
  const [user, setUser] = useState({ name: "", email: "", image: "" });
  const dispatch = useDispatch();
  const imageRef = useRef();

  const handle_changes = (e) => {
    const key = e.currentTarget.name;
    let state = { ...user };
    if (key !== "image") state[key] = e.target.value;
    else state[key] = e.target.files[0];
    setUser(state);
  };
  const submit_form = () => {
    const formData = new FormData();
    formData.append("image", user.image);
    formData.append("name", user.name);
    formData.append("email", user.email);
    dispatch(create_new_user(formData));
    clear_form();
  };

  const clear_form = () => {
    setUser({ name: "", email: "", image: "" });
    imageRef.current.value = "";
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#registerModel"
      >
        Register
      </button>
      <div
        className="modal fade"
        id="registerModel"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Register Form
              </h5>
            </div>

            <div
              id="RegisterForm"
              className="modal-body"
              encType="multipart/form-data"
            >
              <div className="col-md-12 form-group">
                <label htmlFor="inputName" className="form-label m-1">
                  Name
                </label>
                <input
                  name="name"
                  value={user.name}
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Enter your name"
                  onChange={handle_changes}
                />
              </div>

              <div className="col-md-12 form-group">
                <label htmlFor="inputEmail4" className="form-label m-1">
                  Email
                </label>
                <input
                  required
                  name="email"
                  value={user.email}
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Enter your email address"
                  onChange={handle_changes}
                />
              </div>

              <div className="col-md-12 form-group">
                <label htmlFor="formFile" className="form-label m-1">
                  Picture
                </label>
                <input
                  ref={imageRef}
                  name="image"
                  className="form-control"
                  type="file"
                  id="formFile"
                  placeholder="Select your profile image"
                  onChange={handle_changes}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={clear_form}
              >
                Discard
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={submit_form}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
