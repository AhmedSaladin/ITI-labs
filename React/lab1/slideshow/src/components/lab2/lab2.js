import { Component } from "react";
import AddUser from "./add_user";
import Table from "./table";
let list = [
  { name: "ali", age: 15 },
  { name: "zaki", age: 30 },
  { name: "loki", age: 32 },
];
class Lab2 extends Component {
  constructor() {
    super();
    this.state = {
      list: list,
    };
    this.add_new_user_to_list = this.add_new_user_to_list.bind(this);
  }
  add_new_user_to_list(user) {
    const list = this.state.list;
    list.push(user);
    this.setState({ list: list });
  }
  render() {
    return (
      <div className="container">
        <Table list={this.state.list} />
        <AddUser onAdd={this.add_new_user_to_list} />
      </div>
    );
  }
}

export default Lab2;
