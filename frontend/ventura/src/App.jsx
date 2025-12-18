import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Destinations from './pages/Destinations';
import Properties from './pages/Properties';
import VenturaOne from './pages/VenturaOne';
import TierBenefits from './pages/TierBenefits';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/ventura-one" element={<VenturaOne />} />
          <Route path="/tier-benefits" element={<TierBenefits />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <footer className="footer">
          <div className="container-custom">
            <div className="footer-logo">
              <img src="/ventura_logo.jpg" alt="Ventura" className="footer-logo-img" />
            </div>
            <p className="footer-tagline" style={{ fontStyle: 'italic', marginBottom: '2rem', color: 'rgba(255,255,255,0.7)' }}>
              Luxury property management and exclusive getaways across the globe.
            </p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-copyright" style={{ color: '#aaa', fontSize: '0.75rem' }}>
              © 2025 Ventura Stays. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
