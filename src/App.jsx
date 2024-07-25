import Accordion from "./containers/Accordion";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Gallery from "./containers/Gallery";
import Hero from "./containers/Hero";
import Navbar from "./containers/Navbar";
import Products from "./containers/Products";
import WhyUs from "./containers/WhyUs";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <WhyUs />
        <Products />
        <Gallery />
        <Contact/>
        <Accordion />
      </main>
      <Footer />
    </>
  );
};

export default App;
