import React, { Fragment } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SampleComponent from './views/samplecomponent';
import { BrowserRouter } from 'react-router-dom';
import Home from './views/home';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <CssBaseline />
        {/* Yahan par routes aayeghe */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
