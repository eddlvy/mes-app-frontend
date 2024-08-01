import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/authorizedRoutes';
import WelcomePage from './pages/welcome';
import HomePage from './pages/home';


function App() {
  return (
    <Router>
      <Routes>
        {/* private Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/user/home" element={<HomePage />}></Route>
        </Route>
        {/* public Route */}
        <Route path="/" element={<WelcomePage />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
