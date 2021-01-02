import React from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList"
import SendMail from "./components/SendMail"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail" >
              <Mail />
            </Route>
            <Route path="/" >
              <EmailList />
            </Route>
          </Switch>
        </div>
        <SendMail />
      </div>
    </Router>

  );
}

export default App;
