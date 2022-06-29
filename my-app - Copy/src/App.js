import "./App.css";

import { Home } from "./Home";
import { Department } from "./Department";
import { Employee } from "./Employee";
import { Navigation } from "./Navigation";
import { Animate } from "./Animate";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          Chirag Valand 
        </h3>

        <Navigation />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
          <Route path="/animate" component={Animate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
