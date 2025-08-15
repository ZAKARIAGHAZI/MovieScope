import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../Styles/Movies.css";

const Movies = () => {
  const [playingData, setPlayingData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Now Playing
    api
      .get(`/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => setPlayingData(res.data.results))
      .catch((err) => console.log(err));

    // Upcoming
    api
      .get(`/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => setUpcomingData(res.data.results))
      .catch((err) => console.log(err));

    // Top Rated
    api
      .get(`/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => setTopRatedData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };

  const renderMovieSlides = (movies) =>
    movies.map((item) => (
      <SwiperSlide key={item.id}>
        <div
          className="card"
          onClick={() => handleMovieClick(item.id)}
          style={{ cursor: "pointer" }}
        >
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
              alt={item.title}
            />
          </div>
          <div className="content_card">
            <p>{item.title}</p>
            <p>
              <FaStar className="icon star" /> {item.vote_average.toFixed(1)}
            </p>
          </div>
        </div>
      </SwiperSlide>
    ));

  return (
    <section className="movies_list">
      <h1>Movies List</h1>

      {/* Now Playing */}
      <div className="now_playing_section section_style">
        <h2>Now Playing</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          loop={playingData.length > 4}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {renderMovieSlides(playingData)}
        </Swiper>
      </div>

      {/* Upcoming */}
      <div className="upcoming_section section_style">
        <h2>Upcoming</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          loop={upcomingData.length > 4}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {renderMovieSlides(upcomingData)}
        </Swiper>
      </div>

      {/* Top Rated */}
      <div className="top_rated_section section_style">
        <h2>Top Rated</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          loop={topRatedData.length > 4}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {renderMovieSlides(topRatedData)}
        </Swiper>
      </div>
    </section>
  );
};

export default Movies;
