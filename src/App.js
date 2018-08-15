import React, { Component, Fragment } from 'react';
import './App.css'; // compiled SCSS, see package.json scripts

import Navigation from "./components/Navigation/";
import Header from "./components/Header/";
import About from "./components/About/";
import Portfolio from "./components/Portfolio/";
import Skills from "./components/Skills/";
import Resume from "./components/Resume/";
import Contact from "./components/Contact/";
import Footer from "./components/Footer/";

class App extends Component {
	state = { show: false };
	onButtonClick = () => {
		this.setState(prevState => ({ show: !prevState.show	}));
	};

  render() {
    return (
      <Fragment>
        <Navigation show={this.state.show} handleClick={this.onButtonClick} />
        <Header />
        <About />
        <Portfolio />
        <Skills />
        <Resume />
        <Contact show={this.state.show} handleClick={this.onButtonClick} />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
