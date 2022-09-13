import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES

import AllProjects from "./pages/AllProjects";
import Reports from "./pages/Reports";
import Browse from "./pages/Browse";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Search from "./pages/Search";
import NewProjects from "./pages/NewProjects";
import MyProjects from "./pages/MyProjects";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/artwork" exact component={AllProjects} />
          <Route path="/Reports" component={Reports} />
          <Route path="/Browse" component={Browse} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Inbox" component={Inbox} />
          <Route path="/Search" component={Search} />
          <Route path="/NewProjects" component={NewProjects} />
          <Route path="/MyProjects" component={MyProjects} />

        </Switch>
      </Router>
    </div>
  );
}
