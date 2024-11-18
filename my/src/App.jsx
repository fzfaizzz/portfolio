import React from 'react';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';
// import About from './pages/About'; // Uncomment once About component is ready
import Footer from './pages/Footer';
import Couser from './pages/Couser';

function App() {
  return (
  <div>
      {/* <Couser/>  */}
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Footer/>
      </div>

  );
}

export default App;
