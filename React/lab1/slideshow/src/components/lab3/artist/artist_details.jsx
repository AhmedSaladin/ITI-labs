import "./artist.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Artist(props) {
  const id = props.match.params.id;
  const [artist, setArtist] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/artists/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((info) => {
        setArtist(info);
      });
  }, [id]);

  const album = () => {
    const albums = artist.albums;
    return albums.map((img) => {
      return (
        <div className="col-12 col-md-6 img" key={img.albumId}>
          <img src={`/images/albums/${img.cover}.jpg`} alt={img.title} />
        </div>
      );
    });
  };

  const display = () => {
    if (artist !== "") {
      return (
        <div className="container-fluid text-center">
          <Link to="/" className="link ">
            MUSIC-DB
          </Link>
          <hr className="bg-dark"></hr>
          <div className="container">
            <img
              className="imgCover"
              src={`/images/covers/${artist.cover}.jpg`}
              style={{ width: "300px", height: "400px" }}
              alt={artist}
            />
            <h4 className="text-center">{artist.name}</h4>
            <p className="text-center">{artist.bio}</p>
            <div className="row  box ">{album()}</div>
          </div>
        </div>
      );
    } else
      return <div className="spinner-border text-info" role="status"></div>;
  };

  return display();
}

export default Artist;
