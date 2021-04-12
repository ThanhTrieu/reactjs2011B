import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SearchPage from '../pages/search/index';
import PopularPage from '../pages/popular/index';
import LoginPage from '../pages/login/index';

const RouterMovie = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SearchPage/>
        </Route>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/popular-movie">
          <PopularPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  )
}
export default React.memo(RouterMovie);