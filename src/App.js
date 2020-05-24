import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import "./styles.css";
import Home from './Home';
import Locations from './Locations';
import ContactForm from './Contact';
import NoMatch from './NoMatch';
import AboutUs from './AboutUs';
import Menu from './Menu';
import { NavigationBar } from './components/NavBar';

console.log(process.env.REACT_APP_GOOGLE_KEY);


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      
      
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/locations" component={Locations} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/menu" component={Menu} />
            <Route component={NoMatch} />
          </Switch>
        </Router>  
      
    </React.Fragment>
  );
}

export default App;
