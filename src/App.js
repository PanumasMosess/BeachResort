import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Room from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/rooms/"  component={Room} />
        <Route exact path="/rooms/:slug"  component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
