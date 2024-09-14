/*
 * Copyright (C) 2022-2024 David C. Harrison. All right reserved.
 *
 * You may not use, distribute, publish, or modify this code without
 * the express written permission of the copyright holder.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import SharedContext from './components/SharedContext';

const AuthenticatedRoute = ({children}) => {
  if (localStorage.getItem('user')) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

// Add prop validation for children
AuthenticatedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

/**
 * Simple component with no state.
 *
 * @return {object} JSX
 */
function App() {
  // console.log(localStorage.getItem('user'));
  const [OpenChannel, setOpenChannel] = React.useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthenticatedRoute>
              <SharedContext.Provider value={{OpenChannel, setOpenChannel}}>
                <Home />
              </SharedContext.Provider>
            </AuthenticatedRoute>
          }
        />
        <Route path="/login" exact element={<Login />} />
        <Route
          path="*"
          element={
            <AuthenticatedRoute>
              <SharedContext.Provider value={{OpenChannel, setOpenChannel}}>
                <Home />
              </SharedContext.Provider>
            </AuthenticatedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
