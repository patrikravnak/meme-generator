import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
