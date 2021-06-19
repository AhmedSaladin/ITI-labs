import { Link } from "react-router-dom";

function ArtistCard({ artist }) {
  return (
    <div className="card mb-5 m-auto" style={{ width: "300px" }}>
      <img src={`/images/covers/${artist.cover}.jpg`} alt="cover" />
      <Link className="btn btn-primary" to={`/artist/${artist.id}`}>
        {artist.name}
      </Link>
    </div>
  );
}

export default ArtistCard;
