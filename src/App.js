import './App.scss';
import React from 'react';
import HomePage from './components/homePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Create from './components/createCard';
import Contact from './components/contact';
import View from './components/viewCard';
import ViewAll from './components/AllComp.js';

function App() {
  return (
    <Router>
      <div>
            <Switch>
                    <Route path='/contact' component={Contact} />
                    <Route path='/view' component={ViewAll} />
                    <Route path='/create' component={Create} />
                    <Route path='/' component={HomePage} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
