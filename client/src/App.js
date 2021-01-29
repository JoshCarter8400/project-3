import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages

import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import SignUpForm from "./pages/Signup";

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
            <Route exact path="/signup" component={SignUpForm} />
          </Switch>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
