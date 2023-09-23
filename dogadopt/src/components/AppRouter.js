// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'; // Import your page components
import Login from './Login';

const AppRouter = () => {
  return (
    <Router>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* Add more routes for other pages here */}
    
    </Router>
  );
}

export default AppRouter;
