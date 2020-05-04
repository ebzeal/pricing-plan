import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PricingPage from '../views/pricing';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PricingPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
