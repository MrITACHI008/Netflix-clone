import React, { useEffect, useState } from "react";
import requests from "../request";
import axiose from "../axiose";
import "../style/Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axiose.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  //   console.log(movie);
  function truncate(str,n){
      return str?.length>n?str.substr(0,n-1)+"...":str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:'center center'
      }}
    >
      <div className="banner_contetents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* button */}
        <button className="banner_button">PLAY</button>
        <button className="banner_button">MY LIST</button>
        {/* description */}
        <h1 className="banner_desscription">{truncate(movie?.overview,150)}</h1>
      </div>
      <div className='banner_fadeBottom'></div>
    </header>
  );
};

export default Banner;
