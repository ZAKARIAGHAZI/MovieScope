import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../api";
import { FaStar } from "react-icons/fa";
import "../Styles/SearchResults.css";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Get query from URL
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    api
      .get(
        `/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`
      )
      .then((res) => {
        setResults(res.data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching search results:", err);
        setLoading(false);
      });
  }, [query]);

  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };

  if (!query) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        Aucune recherche effectuée.
      </p>
    );
  }

  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px" }}>
        Chargement des résultats...
      </p>
    );
  }

  return (
    <section className="movies_list_search">
      <h1>Résultats de recherche pour "{query}"</h1>

      {results.length > 0 ? (
        <div className="search_results_grid">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="card"
              onClick={() => handleMovieClick(movie.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="image">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : "https://placehold.co/300x450?text=No+Image"
                  }
                  alt={movie.title}
                />
              </div>
              <div className="content_card">
                <p>{movie.title}</p>
                <p>
                  <FaStar className="icon star" />{" "}
                  {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "1.1rem",
            color: "#aaa",
          }}
        >
          🎬 Aucun film ne correspond à votre recherche.
          <br />
          Essayez avec un autre titre.
        </p>
      )}
    </section>
  );
};

export default SearchResults;
