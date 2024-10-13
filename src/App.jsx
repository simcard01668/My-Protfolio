
import './App.scss'
import Test from './Test'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Parallax from './components/Parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Cursor from './components/Cursor/Cursor' 

function App() {

  return (
    <div>
      <Cursor />
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>Service<Parallax type="services"/></section>
      <section id="services"><Services /></section>
      <section id="experience">Portfolio<Parallax type="portfolio"/></section>
      <Portfolio />
      <section>Protfolio</section>
      <section>Protfolio</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
  )
}

export default App
