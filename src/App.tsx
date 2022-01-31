import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Github from './components/github';
import Contact from './components/contact';
import Intro from "./components/intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Github />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
