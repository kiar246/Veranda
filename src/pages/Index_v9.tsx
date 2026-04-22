import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import Applications from '@/components/Applications';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Applications />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;