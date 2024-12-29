import './App.css'
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
    </div>
  )
}

export default App
