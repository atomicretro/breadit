import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal/modal';

const App = () => {
  return (
    <div>
      <Modal />
      <header>
        <NavbarContainer />
      </header>
    </div>
  );
};

export default App;
