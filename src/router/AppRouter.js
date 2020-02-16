import React from "react";
import edit from '../component/Edit';
import create from '../component/Create';
import help from '../component/Help';
import notFound from '../component/NotFound';
import Header from '../component/Header';
import main from '../component/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={main} exact={true} />
          <Route path="/create" component={create} />
          <Route path="/edit/:id" component={edit} />          
          <Route path="/help" component={help} />
          <Route component={notFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default router;
