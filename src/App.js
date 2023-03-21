import React from "react"
import { useState, useEffect } from 'react'
import MovieList from "./pages/MovieList";
import CoinTracker from "./pages/CoinTracker";
import TodoManager from "./pages/TodoManager";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Detail from "./pages/Detail";
function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/to-do-manager">
          <TodoManager />
        </Route>
        <Route path="/coin-tracker">
          <CoinTracker />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;