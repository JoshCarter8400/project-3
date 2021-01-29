import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//import pages

import Home from "./pages/Home";
import LoginForm from "./pages/Login";

//import components

import Navbar from "./components/Nav/index";

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
