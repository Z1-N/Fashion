import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/PageComponents/Landing';
import About from './components/PageComponents/About';
import NavBar from './components/PageComponents/NavBar';
import Footer from './components/PageComponents/Footer';
import ProductList from './components/shop/ProductList';
import BestSelling from './components/PageComponents/BestSelling'; // Keep this for potential routes
import ProductsSection from './components/PageComponents/Products'; // Keep this for potential routes
import ExclusiveOffer from './components/PageComponents/ExclusiveOffer'; // Keep this for potential routes
import FeedbackSlider from './components/PageComponents/FeedbackCorner'; // Keep this for potential routes

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/home" element={
            <>
              <LandingPage />
              <BestSelling />
              <ProductsSection />
              <ExclusiveOffer />
              <FeedbackSlider />
              <Footer />
            </>
          } />
          <Route path="/shop" element={
            <>
              <NavBar />
              <ProductList />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <NavBar />
              <About />
              <Footer />
            </>
          } />
          {/* Add additional routes as needed */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
