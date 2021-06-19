function Table({ list }) {
  const length = list.length;
  const row = list.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.age}</td>
    </tr>
  ));
  if (length > 0) {
    return (
      <div className="container mx-auto mt-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      </div>
    );
  } else {
    return <p>No users found</p>;
  }
}

export default Table;
