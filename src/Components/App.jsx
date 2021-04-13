import React from 'react';
import Header from "./Header";
import '../App.css'
import Router from "./Router";
import FirstPage from "./FirstPage";

const App = () => {
    return(
        <div className="App">
          <Header/>
          <Router/>
        </div>
    );
};

export default App;