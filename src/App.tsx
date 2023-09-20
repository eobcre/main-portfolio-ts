// components
import Header from './components/Header';
import ChatBot from './components/ChatBot';
// sections
import Home from './sections/Home';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <>
      <>
        <Header />
        <ChatBot />
        <Home />
        <section id='About'>
          <About />
        </section>
        <section id='Work'>
          <Work />
        </section>
        <section id='Contact'>
          <Contact />
        </section>
        <Footer />
      </>
    </>
  );
};

export default App;
