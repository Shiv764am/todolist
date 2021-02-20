import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import AddUser from "./components/pages/users/AddUser";
import EditUser from "./components/pages/users/EditUser";
import Notfound from "./components/pages/Notfound";
import Navbar from './components/pages/layout/Navbar';
import User from './components/pages/users/User';
function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
         
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/:id" component={User}/>
          <Route component={Notfound} />
         
        </Switch>
      </div>
    </Router>
    </div>

  );
}

export default App;
