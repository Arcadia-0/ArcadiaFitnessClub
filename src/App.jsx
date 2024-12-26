import './App.css'
import Hero from './components/Hero/Hero'
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
    </div>
  )
}

export default App
