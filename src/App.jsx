import './App.css'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import Membership from './components/Membership/Membership'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Slider from './components/Slider/Slider'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Slider/>
      <Membership/>
      <Gallery/>
    </div>
  )
}

export default App
