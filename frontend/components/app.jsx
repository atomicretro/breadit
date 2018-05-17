import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionModalContainer from './modals/session_modal/session_modal_container';
import NavbarContainer from './navbar/navbar_container';
import PoemIndexContainer from './poems/poem_index/poem_index_container';
import PoemShowContainer from './poems/poem_show/poem_show_container';
import NewPoemContainer from './poems/poem_form/new_poem_container';
import AuthorIndexContainer from './authors/author_index/author_index_container';
import NewAuthorContainer from './authors/author_form/new_author_container';
import AuthorShowContainer from './authors/author_show/author_show_container';
import Footer from './footer/footer';

const App = () => {
  return (
    <div className="app-page">
      <SessionModalContainer />
      <NavbarContainer className="header" />
      <main className="main">
        <Switch>
          <Route exact path="/poems/" component={PoemIndexContainer} />
          <Route exact path="/poems/new" component={NewPoemContainer} />
          <Route exact path="/poems/:poemId" component={PoemShowContainer} />
          <Route
            exact path="/poems/:poemId/annotations/:annotationId"
            component={PoemShowContainer} />
          <Route exact path="/authors" component={AuthorIndexContainer} />
          <Route exact path="/authors/new" component={NewAuthorContainer} />
          <Route exact path="/authors/:authorId" component={AuthorShowContainer} />
        </Switch>
        <div className="push"></div>
      </main>
      <Footer className="footer" />
    </div>
  );
};

export default App;
