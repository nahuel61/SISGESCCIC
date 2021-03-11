import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from "../Pages/Dashboard";
import Sensores from "../Pages/Sensores";
import InitConf from "../Pages/InitConf";
import LibroGu from "../Pages/LibroGu";
import LoginPage from "../Pages/LoginPage";

function App() {
  return (
      <BrowserRouter>
          <Route exact path="/" component={LoginPage}/>

        <Switch>

            <Route path="/InitConf" component={InitConf}/>
            <Route path="/Dashboard" component={Dashboard}/>
            <Route path="/Sensores" component={Sensores}/>
            <Route path="/LibroGu" component={LibroGu}/>

        </Switch>
      </BrowserRouter>
  );
}
export default App;
