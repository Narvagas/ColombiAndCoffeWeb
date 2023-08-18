import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './components/Home';
import CafeTradicional from './components/CafeTradicional';
import CafeEspecial from './components/CafeEspecial';
import Souvenirs from './components/Souvenirs';
import RegalosOfertas from './components/RegalosOfertas';
import Blog from './components/Blog';
import Suscripciones from './components/Suscripciones';
import CafeSpecialSection from './CafeSpecialSection';
import InfoSection from './InfoSection';
import BrandsCarousel from './BrandsCarousel';
import BlogSection from './BlogSection';
import TestimonialsCarousel from './TestimonialsCarousel';
import ContactCTASection from './ContactCTASection';
import FooterLinksSection from './FooterLinksSection';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/cafe-tradicional" component={CafeTradicional} />
          <Route path="/cafe-especial" component={CafeEspecial} />
          <Route path="/souvenirs" component={Souvenirs} />
          <Route path="/regalos-ofertas" component={RegalosOfertas} />
          <Route path="/blog" component={Blog} />
          <Route path="/suscripciones" component={Suscripciones} />
        </Routes>
        <CafeSpecialSection />
        <InfoSection />
        {/* <BrandsCarousel /> */}
        <BlogSection />
        <TestimonialsCarousel />
        <ContactCTASection />
        <FooterLinksSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
