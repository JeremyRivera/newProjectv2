import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Links from "./pages/Links";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MainNav from "./components/MainNav/Index";
const App = () => {
  return (
    <Router>
      <main>
        <MainNav text="Jeremy Rivera" />
        <Switch>
          <Route path="/" exact>
            <Links />
          </Route>
          <Route path="/Projects" exact>
            <Projects />
          </Route>
          <Route path="/" exact>
            <About />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
