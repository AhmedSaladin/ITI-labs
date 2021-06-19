import { Redirect } from "react-router-dom";

function Not_found(props) {
  const navigateTo = () => {
    props.history.push("/users");
    // return <Redirect to="/users" />;
  };
  return (
    <div className="container">
      <h1>Not Found.</h1>
      <input type="button" value="Go Home" onClick={navigateTo} />
    </div>
  );
}

export default Not_found;
