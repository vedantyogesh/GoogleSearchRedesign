import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/homepage/Home";
import SearchPage from "./pages/searchpage/SearchPage";
import { ThemeProvider } from "@material-ui/core";
import theme from './theme/theme'

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
