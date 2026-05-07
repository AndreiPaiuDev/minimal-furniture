import Header from './components/layout/header/Header'
import Hero from './components/sections/hero/Hero'
import About from './components/sections/about/About'
import Price from './components/sections/price/Price'
import OurProducts from './components/sections/products/OurProducts'
import BestSellers from './components/sections/bestsellers/BestSellers'
import Reviews from './components/sections/reviews/Reviews'
import Subscribe from './components/sections/subscribe/Subscribe'
import Footer from './components/layout/footer/Footer'
import BackToTop from './components/shared/BackToTop'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Price />
      <OurProducts />
      <BestSellers />
      <Reviews />
      <Subscribe />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
