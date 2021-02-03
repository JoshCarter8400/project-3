import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { Provider } from 'react-redux';
import store from './utils/store';

//import pages
import Team from './pages/Team';
import Home from './pages/Home';
import LoginForm from './pages/Login';
import SignUpForm from './pages/Signup';
import Profile from './pages/Profile';
import OrderHistory from './pages/OrderHistory';
import SingleReview from './pages/SingleReview';
import Services from './pages/Services';
import Detail from './pages/Detail';

//import components

import Navbar from './components/Nav/index';
import Footer from './components/Footer/index';
import TermsAndConditions from './components/TermsAndConditions/index';
import ReviewForm from './components/ReviewForm';
import ReviewsList from './components/ReviewsList';
import Cart from './components/Cart';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Provider store={store}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={SignUpForm} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/singleReview" component={SingleReview} />
              <Route
                exact
                path="/termsAndConditions"
                component={TermsAndConditions}
              />
              <Route exact path="/services" component={Services} />
              <Route exact path="/services/:id" component={Detail} />
              <Route exact path="/reviewForm" component={ReviewForm} />
              <Route exact path="/ReviewsList" component={ReviewsList} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
            <Footer />
          </Provider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
