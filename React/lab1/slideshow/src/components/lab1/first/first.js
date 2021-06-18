import React from "react";

class First extends React.Component {
  constructor() {
    super();
    this.state = { txt: "" };
    this.type_change = this.type_change.bind(this);
    this.reset_text = this.reset_text.bind(this);
  }

  type_change(event) {
    this.setState({ txt: event.target.value });
  }

  reset_text() {
    this.setState({ txt: "" });
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Text Change</div>
          <div className="card-body">
            <div className="row">
              <div className="mb-3 col-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter any text"
                  onChange={this.type_change}
                  value={this.state.txt}
                />
              </div>
              <div className="col-3">
                <input
                  type="button"
                  className="btn btn-primary"
                  value="Reset"
                  onClick={this.reset_text}
                />
              </div>
              <div className="col-12">Text Mirror: {this.state.txt}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default First;
