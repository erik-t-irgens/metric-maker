import React from 'react';
import logo from './logo.svg';
import { Helmet } from 'react-helmet'
import MainPage from "./views/index"
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>Metrics Maker</Helmet>
      <BrowserRouter>
        {/* <Header /> */}

        <Switch>
          <Route path={"/"} component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
