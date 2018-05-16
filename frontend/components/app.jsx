import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionModalContainer from './modals/session_modal/session_modal_container';
import NavbarContainer from './navbar/navbar_container';
import PoemIndexContainer from './poems/poem_index/poem_index_container';
import PoemShowContainer from './poems/poem_show/poem_show_container';
import NewPoemContainer from './poems/poem_form/new_poem_container';
import AuthorIndexContainer from './authors/author_index/author_index_container';
import Footer from './footer/footer';

const App = () => {
  return (
    <div className="app-page">
      <SessionModalContainer />
      <NavbarContainer />
      <main className="main">
        <Switch>
          <Route exact path="/poems/" component={PoemIndexContainer} />
          <Route exact path="/poems/new" component={NewPoemContainer} />
          <Route exact path="/poems/:poemId" component={PoemShowContainer} />
          <Route
            exact path="/poems/:poemId/annotations/:annotationId"
            component={PoemShowContainer} />
          <Route exact path="/authors" component={AuthorIndexContainer} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
