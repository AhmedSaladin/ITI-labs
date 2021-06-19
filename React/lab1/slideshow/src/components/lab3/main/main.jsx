import "./main.css";
import { useState, useEffect } from "react";
import ArtistCard from "../artist/artist_card";

function Main() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/artists")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
      });
  }, []);

  const display = () => {
    if (list.length > 0) {
      return list.map((artist) => {
        return <ArtistCard artist={artist} key={artist.id} />;
      });
    }
    return <div className="spinner-border text-info" role="status"></div>;
  };

  return (
    <div className="home bg-light">
      <div
        className="head text-center img-fluid container-fluid"
        style={{ backgroundImage: "url(images/cover.png" }}
      >
        <h1>MUSIC-DB</h1>
      </div>
      <div className="artist text-center  container ">
        <h2>Browse The Artist</h2>
        {display()}
      </div>
    </div>
  );
}

export default Main;
