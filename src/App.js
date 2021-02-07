import React, { useState } from 'react';
import './App.css';

import Navigation from "./components/Navigation/";
import Header from "./components/Header/";
import About from "./components/About/";
import Portfolio from "./components/Portfolio/";
import Skills from "./components/Skills/";
import Modal from "./components/UI/Modal";
import Backdrop from "./components/UI/Backdrop";
import Footer from "./components/Footer/";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const handleToggleModal = () => setShowModal(!showModal);
  return (
      <main>
        <Navigation handleClick={handleToggleModal} />
        <Header />
        <About />
        <Portfolio />
        <Skills />
        {showModal && <Modal />}
        {showModal && <Backdrop handleClick={handleToggleModal} />}
        <Footer />
      </main>
  );
};

export default App;
