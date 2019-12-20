import React from "react";
import { Route, Switch, Router } from "react-router-dom";

// Styling
import * as routes from "./Constant";

// Routes
import Login from "./routes/Login";
import App from "./routes/App";
import Home from "./routes/Home";

const Content = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={routes.MAIN_PATH} render={() => <App />} />

          <Route path={routes.HOME_PATH} render={() => <Home />} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default Content;
