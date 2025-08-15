import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import "../Styles/MovieDeatails.css";

const MovieDeatails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

    useEffect(() => {
      const fetchMovie = async () => {
        try {
          const response = await api.get(
            `/movie/${id}?api_key=${
              import.meta.env.VITE_API_KEY
            }&language=en-US`
          );
          setMovie(response.data);
        } catch (error) {
          console.error("Failed to fetch movie details:", error);
        }
      };

      fetchMovie();
    }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <div className="movie-detail-content">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p className="tagline">{movie.tagline}</p>
          <p className="overview">{movie.overview}</p>

          <div className="movie-meta">
            <span>
              <strong>Release:</strong> {movie.release_date}
            </span>
            <span>
              <strong>Rating:</strong> {movie.vote_average} / 10
            </span>
            <span>
              <strong>Runtime:</strong> {movie.runtime} min
            </span>
            <span>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((g) => g.name).join(", ")}
            </span>
          </div>

          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-btn"
            >
              Visit Official Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDeatails;
