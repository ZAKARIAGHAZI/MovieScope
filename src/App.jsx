import Header from "./Components/Header"
import { HeroSection } from "./Components/HeroSection"
import { Routes, Route, useLocation } from 'react-router-dom'
import Movies from "./Components/Movies"
import './App.css'
import Footer from "./Components/Footer"

const  App = () => {

   const location = useLocation();
   const isHome = location.pathname === "/";

  return (
    <>
      <Header />
      {isHome && <HeroSection />}
      {isHome && <Movies />}
      <Routes>
        <Route path="/movies" element={<Movies />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App
