import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../data/Axios";
import "./colse.css";

const Cols = ({ title, fetchUrl, isLargeRow = false }) => {
  const [move, setMove] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(fetchUrl);
      setMove(data.data.results);

      return data;
    }
    fetchData();
  }, [fetchUrl]);
  const BaseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className='row__item'>
        {move.map((Movie) => {
          return (
            <img
              src={`${BaseUrl}${
                isLargeRow ? Movie.poster_path : Movie.backdrop_path
              }`}
              alt={Movie.name}
              key={Movie.id}
              className={` ${isLargeRow ? `row__poster` : "row__imge"}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cols;
