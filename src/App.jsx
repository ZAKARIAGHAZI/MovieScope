import Header from "./Components/Header"
import { HeroSection } from "./Components/HeroSection"
import { Routes, Route } from 'react-router-dom'
import Movies from "./Components/Movies"
import './App.css'
import Footer from "./Components/Footer"
import MovieDeatails from "./Pages/MovieDeatails";

const  App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>
        <HeroSection />
        <Movies />
        </>
      } />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDeatails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App
