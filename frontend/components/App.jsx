import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import ModalContainer from './modal/modal_container';

const App = () => {
  return (
    <div>
      <ModalContainer />
      <header>
        <NavbarContainer />
      </header>
    </div>
  );
};

export default App;
