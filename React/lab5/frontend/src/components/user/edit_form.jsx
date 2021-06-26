import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import edit_user_details from "../../actions/edit_user_details";

export default function Edit_model({ info }) {
  const id = info._id;
  const [user, setUser] = useState({
    name: info.name,
    email: info.email,
    image: info.image,
  });

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
    if (!no_change(user, info)) dispatch(edit_user_details(id, formData));
    imageRef.current.value = "";
  };

  const no_change = (current, last) => {
    const name = current.name === last.name;
    const email = current.email === last.email;
    const image = current.image === last.image;
    if (name & email & image) return true;
    return false;
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary ml-0 mr-2 mt-2 mb-2"
        data-bs-toggle="modal"
        data-bs-target="#editModel"
      >
        Edit
      </button>
      <div
        className="modal fade"
        id="editModel"
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
                Edit Form
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
