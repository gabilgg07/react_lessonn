import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Posts from "./Posts";
import PostDetail from "./PostDetail";

const Pages = () => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/blogs">
        <Blogs />
      </Route> */}
      <Route exact path="/" component={Home} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/about" component={About} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={PostDetail} />
    </Switch>
  );
};

export default Pages;
