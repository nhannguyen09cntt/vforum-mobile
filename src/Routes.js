import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  Home as HomePage
} from './pages';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomePage}
        exact
        layout={MainLayout}
        path="/"
      />
    </Switch>
  );
};

export default Routes;
