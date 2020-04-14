import React from "react";
import Home from "./home/home";
import Blog from "./blog/blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ul className="flex">
        <li className="mr-6">
          <Link to="/">
            <div className="text-blue-500 mx-6 my-2 text-xl">Home</div>
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/blog">
            <div className="text-blue-500 my-2 text-xl">Blog</div>
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
