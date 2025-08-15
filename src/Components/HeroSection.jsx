import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCalendarAlt, FaGlobe, FaStar } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../Styles/HeroSection.css";

export const HeroSection = () => {
  const [data, setData] = useState([]);
  const [heroHeight, setHeroHeight] = useState("100vh");
  const navigate = useNavigate();


  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeroHeight(`calc(100vh - ${header.offsetHeight}px)`);
    }
  }, []);

  useEffect(() => {
    api
      .get(`/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <section className="hero-section" style={{ height: heroHeight }}>
      <div className="hero_container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ dynamicBullets: true }}
          loop={data.length > 1}
          autoplay={{ delay: 4000 }}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="slide">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                alt={item.title}
              />
              <div className="overlay" />
              <div className="content">
                <h1 className="movie-title">{item.title}</h1>
                <div className="movie-details">
                  <p>
                    <FaCalendarAlt className="icon" /> {item.release_date}
                  </p>
                  <p>
                    <FaGlobe className="icon" />{" "}
                    {item.original_language.toUpperCase()}
                  </p>
                  <p>
                    <FaStar className="icon star" /> {item.vote_average} / 10
                  </p>
                </div>
                <p className="overview">{item.overview}</p>
                <button className="details-btn" onClick={()=>navigate(`/movies/${item.id}`)
                }>View Details</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
