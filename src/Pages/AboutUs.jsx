import "../Styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <h1>About Movies Scope</h1>
        <p className="tagline">Your ultimate destination for movie lovers</p>

        <p>
          At <strong>Movies Scope</strong>, we are passionate about bringing the
          magic of cinema to your screen. Our platform is designed for movie
          enthusiasts who want to explore the latest releases, discover hidden
          gems, and relive timeless classics.
        </p>

        <p>
          We provide detailed movie information, reviews, ratings, trailers, and
          personalized recommendations. Whether you’re a casual watcher or a
          hardcore film buff, Movies Scope is your go-to place for all things
          movies.
        </p>

        <div className="mission">
          <h2>🎯 Our Mission</h2>
          <p>
            To create a community where movie lovers can connect, share, and
            experience the world of cinema together.
          </p>
        </div>

        <div className="contact">
          <h2>📩 Contact Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:contact@moviesscope.com">contact@moviesscope.com</a>
          </p>
          <p>Follow us on social media for updates and movie news.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
