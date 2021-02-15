import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerRecords from "./CustomerRecords";
import "./style.css";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => {
            return (
              <>
                <img className='imgimg' src='./Page-under-construction.png' />
              </>
            );
          }}
        />
        <Route exact path='/:url' component={CustomerRecords} />
        <Route path='*' component={() => <h1>خطأ بالرابط</h1>} />
      </Switch>
    </Router>
  );
};

export default Routes;
