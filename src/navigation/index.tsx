import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Spinner from 'components/Spinner';


const MainPage = React.lazy(() => import('pages/MainPage'));

const MainNavigation = () => {
  return (
    <Router>
      <React.Suspense fallback={<Spinner animation="border" variant="primary" />}>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default MainNavigation;
