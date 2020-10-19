import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Showcase } from './components/Showcase';
import { Designers } from './components/Designers';
import { Support } from './components/Support';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';

function App() {
  return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/showcase" component={Showcase} />            
            <Route path="/designers" component={Designers} />
            <Route path="/support" component={Support} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
