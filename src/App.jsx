import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// For Components
import MainAdoptPet from './Components/AdoptPet/MainAdoptPet'
import MainBlogs from './Components/OurBlogs/MainBlogs'

// For Layout
import Navbar from './Layout/Navbar/Navbar'
import Footer from './Layout/Footer/Footer'




// For Pages
import Home from './Pages/Home/Home'
import AboutPage from './Pages/AboutPage/AboutPage'
import GalleryPage from './Pages/GalleryPage/GalleryPage'
import TeamsPage from './Pages/TeamsPage/TeamsPage'
import BlogsPage from './Pages/BlogsPage/BlogsPage'
import DonationPage from './Pages/DonationPage/DonationPage'
import AdoptPetPage from './Pages/AdoptPetPage/AdoptPetPage'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={[<Navbar />, <Home />, <Footer />]}></Route>
          <Route path='/AboutPage' element={[<Navbar />, <AboutPage />, <Footer />]}></Route>
          <Route path='/GalleryPage' element={[<Navbar />, <GalleryPage />, <Footer />]}></Route>
          <Route path='/TeamsPage' element={[<Navbar />, <TeamsPage />, <Footer />]}></Route>
          <Route path='/BlogsPage' element={[<Navbar />, <BlogsPage />, <Footer />]}></Route>
          <Route path='/DonationPage' element={[<Navbar />, <DonationPage />, <Footer />]}></Route>
          <Route path='/AdoptPetPage' element={[<Navbar />, <AdoptPetPage />, <Footer />]}></Route>

          {/* Route For Main Adopt Pet */}
          <Route path='/AdoptPet/:MainAdoptPet_MainId' element={[<Navbar />, <MainAdoptPet />, <Footer />]} ></Route>

          {/* Route For Main Blogs */}
          <Route path='/OurBlogs/:OurBlogsMainId' element={[<Navbar />, <MainBlogs />, <Footer />]}></Route>


        </Routes>
      </Router>
    </>
  )
}

export default App
