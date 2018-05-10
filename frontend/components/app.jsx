import React from 'react';
import { Route } from 'react-router-dom';
import ModalContainer from './modal/modal_container';
import NavbarContainer from './navbar/navbar_container';
import PoemContainer from './poems/poem_container';

const App = () => {
  return (
    <div>
      <ModalContainer />
      <header>
        <NavbarContainer />
      </header>
      <body>
        <Switch>
          <Route path="/poems/:poemId" component={PoemContainer} />
        </Switch>
      </body>
    </div>
  );
};

export default App;
