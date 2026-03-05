
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AboutPage from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import Marketing from './pages/Marketing';
import Technology from './pages/Technology';
import ECommerce from './pages/E-Commerce';
import TaxFiling from './pages/Tax-filing';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Services Page */}
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/e-commerce' element={<ECommerce />} />
        <Route path='/tax-filing' element={<TaxFiling />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

