import React from 'react';
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import Posts from './components/ApiPosts';
import ApiWorkout from './components/ApiWorkout';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Posts/>
      <ApiWorkout/>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1>} />
          <Route exact path="/about" render={() => <h1>Sign up</h1>} />
          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;