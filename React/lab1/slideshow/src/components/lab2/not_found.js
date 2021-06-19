function Not_found(props) {
  const navigateTo = () => {
    props.history.push("/users");
  };
  return (
    <div className="container">
      <h1>Not Found.</h1>
      <input type="button" value="Go Home" onClick={navigateTo} />
    </div>
  );
}

export default Not_found;
