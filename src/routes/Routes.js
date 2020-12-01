import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Default from '../pages/Default';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Upload from '../pages/Upload';

const pages = [
  {
    path: '/',
    component: Default
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/upload',
    component: Upload
  }
]


const Routes = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        {pages.map((elem, i) => <Route exact {...elem} key={i} />)}
      </Switch>  
    </BrowserRouter>
  );
};

export default Routes;