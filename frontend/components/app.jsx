import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ModalContainer from './modal/modal_container';
import NavbarContainer from './navbar/navbar_container';
import PoemIndexContainer from './poem_index/poem_index_container';
import PoemShowContainer from './poem_show/poem_show_container';
import NewPoemContainer from './poem_form/new_poem_container';
import Footer from './footer/footer';

const App = () => {
  return (
    <div className="app-page">
      <ModalContainer />
      <NavbarContainer />
      <main className="main">
        <Switch>
          <Route exact path="/poems/" component={PoemIndexContainer} />
          <Route exact path="/poems/new" component={NewPoemContainer} />
          <Route exact path="/poems/:poemId" component={PoemShowContainer} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
