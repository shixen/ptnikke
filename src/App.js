import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ApiPosts from './components/ApiPosts';
import ApiWorkout from './components/ApiWorkout';
import Signup from './components/SignUp';
import './App.module.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Container className="mt-5">
          <Switch>
            <Route exact path="/" render={() => (
              <div>
                <ApiPosts />
                <ApiWorkout />
              </div>
            )} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/about" component={AboutMe} />
            <Route render={() => <p>Page not found!</p>} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;