import React, { Fragment } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SampleComponent from './views/samplecomponent';
import { BrowserRouter } from 'react-router-dom';
import { AdminHome } from './views';
import { DefaultLayout } from './components/layout';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <CssBaseline />
        {/* Yahan par routes aayeghe */}
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
