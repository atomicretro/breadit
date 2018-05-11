import React from 'react';
import { Route } from 'react-router-dom';
import ModalContainer from './modal/modal_container';
import NavbarContainer from './navbar/navbar_container';
import PoemContainer from './poems/poem_container';
import Footer from './footer/footer';

const App = () => {
  return (
    <div className="app-page">
      <ModalContainer />
      <header>
        <NavbarContainer />
      </header>
      <main>
        <Route path="/poems/:poemId" component={PoemContainer} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
