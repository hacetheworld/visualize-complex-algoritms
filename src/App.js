import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './homePage/homePage.component';
import SortingAlgo from './sorting/sorting';
// import PathFinding from './pathFinding/pathFinding.component';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={SortingAlgo} />
      </Switch>
    </div>
  );
}

export default App;
