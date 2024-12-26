import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Booking from './pages/Booking'
import Pricing from './pages/Pricing'
import './styles/calendar.css'

function App() {
  return (
    <HelmetProvider>
      <ParallaxProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </Layout>
        </Router>
      </ParallaxProvider>
    </HelmetProvider>
  )
}

export default App
