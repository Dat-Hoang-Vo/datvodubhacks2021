import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Donation from "./components/page/Donation";
import HelpingHand from "./components/page/HelpingHand";
import Home from "./components/page/Home";
import Resources from "./components/page/Resources";

import TopNav from "./components/part/TopNav";
import "./App.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route exact path="/donate">
          <Donation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
