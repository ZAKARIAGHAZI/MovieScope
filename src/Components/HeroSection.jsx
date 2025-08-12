import { useState, useEffect } from "react";
import { api } from "./api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../Styles/HeroSection.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const HeroSection = () => {
  const [data, setDate] = useState([]);
  useEffect(() => {
    api
      .get(`/popular?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => {
        setDate(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section>
        <div className="hero_container">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ dynamicBullets: true }}
            loop={true}
            // autoplay={{ delay: 3000 }}
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
                  <h1>{item.title}</h1>
                  <p>
                    <strong>Release Date:</strong> {item.release_date}
                  </p>
                  <p>
                    <strong>Language:</strong>{" "}
                    {item.original_language.toUpperCase()}
                  </p>
                  <p>
                    <strong>Rating:</strong> {item.vote_average} / 10
                  </p>
                  <p className="overview">{item.overview}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
