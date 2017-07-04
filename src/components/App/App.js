import React from 'react';


import './App.css';

import MainHeader from '../MainHeader'
import ProgressBar from "../ProgressBar";
import DashboardContainer from "../../containers/DashboardContainer";

const App = () => (
    <div className="App">
      <MainHeader/>
      <ProgressBar/>
      <DashboardContainer/>
    </div>
);

export default App;
