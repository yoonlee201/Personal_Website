import React from "react";
import { Navigate } from "react-router";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navigator from './script/Navigator.js';
import Home from './script/Home.js';

import './stylesheet/App.css';
function App() {
    const buildPage = (page) => (
        <div className="Page">
            <Navigator />
            {page}
        </div>
    );


    return (
        <HashRouter basename="/" future={{ v7_startTransition: true }}>
            <Routes>
                <Route exact path="/" element={buildPage(<Home />)} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </HashRouter>
    );
  //
  // return (
  //   <div className="App">
  //       <Navigator />
  //       <div>
  //
  //       </div>
  //   </div>
  // );
}

export default App;
