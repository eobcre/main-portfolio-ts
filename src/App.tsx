import { useState, useEffect } from 'react';
// Components
import Header from './components/Header';
import ChatBot from './components/ChatBot';
// Sections
import Home from './sections/Home';
import About from './sections/About';
import MyWork from './sections/MyWork';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Preloader
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // JSX
  return (
    <>
      {loading ? (
        <div className='preloader-container'>
          <img className='loading' src='logo.png' alt='Logo' width='70' />
        </div>
      ) : (
        <>
          <Header />
          <ChatBot />
          <Home />
          <section id='About'>
            <About />
          </section>
          <section id='MyWork'>
            <MyWork />
          </section>
          <section id='Contact'>
            <Contact />
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
