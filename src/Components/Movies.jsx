import { useState, useEffect } from "react";
import { api } from "./api";
import { FaStar } from "react-icons/fa";

const Movies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/now_playing?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="movies_list">
        <h1>Movies List</h1>
        <div className="now_playing_section section_style">
          {data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="image">
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                    alt={item.title}
                  />
                </div>
                <div className="content_card">
                  <p>{item.title}</p>
                  <p>
                    <FaStar className="icon star" /> {item.vote_average}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="top_rated_section section_style"></div>
        <div className="up_comin_section section_style"></div>
      </section>
    </>
  );
};

export default Movies;
