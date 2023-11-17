import React, { Fragment } from 'react';

import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import SampleComponent from './views/samplecomponent';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <CssBaseline />
        {/* Yahan par routes aayeghe */}
        <Routes>
          <Route path="/" element={<SampleComponent />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
