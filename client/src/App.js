import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import pages
import Team from "./pages/Team";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import SignUpForm from "./pages/Signup";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";

//import components

import Navbar from "./components/Nav/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/orderHistory" component={OrderHistory} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
