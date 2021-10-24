import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HelpingHand from "./components/page/HelpingHand";
import Home from "./components/page/Home";

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
          <TopNav />
        </Route>
        <Route exact path="/donate">
          <HelpingHand />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
