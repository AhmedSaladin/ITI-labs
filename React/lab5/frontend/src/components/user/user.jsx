import { Link } from "react-router-dom";
export default function User({ info }) {
  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <Link to={`/users/${info._id}`} style={{ textDecoration: "none" }}>
        <div className="alert border border-2 d-flex justify-content-between ">
          <h2 className="align-self-center text-dark">{info.name}</h2>
          <img
            src={`https://react-deploy-task.herokuapp.com${info.image}`}
            alt={info.name}
            className="w-25 rounded"
            style={{ maxHeight: "100px" }}
          />
        </div>
      </Link>
    </div>
  );
}
