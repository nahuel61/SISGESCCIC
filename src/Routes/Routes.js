import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from "../Pages/Dashboard";
import Sensores from "../Pages/Sensores";
import InitConf from "../Pages/initConf";

function App() {
  return (
      <BrowserRouter>
          <Route exact path="/" component={InitConf}/>
        <Switch>

            <Route path="/Dashboard" component={Dashboard}/>
            <Route path="/Sensores" component={Sensores}/>

        </Switch>
      </BrowserRouter>
  );
}
export default App;
