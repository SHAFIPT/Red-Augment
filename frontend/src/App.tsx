import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ServicePage from './pages/ServicePage';
import BlogPage from './pages/BlogPage';
import PricingPage from './pages/pricePage';

function App() {
  return (
    <Router>
        <Routes>
          {/* Redirect root ("/") to "/service" */}
          <Route path="/" element={<Navigate to="/service" replace />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
    </Router>
  );
}

export default App;
