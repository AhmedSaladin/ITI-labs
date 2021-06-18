import { Component } from "react";

class Add_user extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
    this.change_name = this.change_name.bind(this);
    this.change_age = this.change_age.bind(this);
    this.clear_state = this.clear_state.bind(this);
    this.test = this.test.bind(this);
  }

  change_name(event) {
    this.setState({ name: event.target.value });
  }

  change_age(event) {
    this.setState({ age: event.target.value });
  }

  clear_state() {
    this.setState({ name: "", age: "" });
    document.getElementById("inputName").value = "";
    document.getElementById("inputAge").value = "";
  }

  test() {
    this.props.onAdd(this.state);
    this.clear_state();
  }

  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary "
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add New User
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Add New User
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.clear_state}
                ></button>
              </div>
              <div className="modal-body row">
                <div className="col-md-8">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    onChange={this.change_name}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputAge" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputAge"
                    onChange={this.change_age}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={this.clear_state}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={this.test}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add_user;
