import React, { Fragment } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import LogIn from './views/login';

import { BrowserRouter } from 'react-router-dom';

import { AdminHome } from './views';
import { DefaultLayout } from './components/layout';
import SignUp from './views/signup';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <CssBaseline />
        {/* Yahan par routes aayeghe */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
