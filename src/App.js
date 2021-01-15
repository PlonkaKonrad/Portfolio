import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './Birds.css';
import NavBar from "./components/layout/NavBar";
import SideNavBar from "./components/layout/SideNavBar";
import BackDrop from "./components/layout/BackDrop";


class App extends Component {
  state = {
    sideBarOpen: false
  };

  handleOpen = () => {
    this.setState({
      sideBarOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      sideBarOpen: false
    });
  };

  render() {
    return (
      <Router>
      <div>
        <NavBar open={this.handleOpen} />
        {this.state.sideBarOpen ? (
          <div>
            <BackDrop close={this.handleClose} />{" "}
          </div>
        ) : null}
        <SideNavBar close={this.handleClose} display={this.state.sideBarOpen} />

        <div style={{ marginTop: "70px"}}>
        
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        </Switch>

        <div className="bird-container bird-container--one">
		        <div className="bird bird--one"></div>
	            </div>
	
	            <div className="bird-container bird-container--two">
		        <div className="bird bird--two"></div>
	            </div>
	
	            <div className="bird-container bird-container--three">
	        	<div className="bird bird--three"></div>
	            </div>
	
	            <div className="bird-container bird-container--four">
	        	<div className="bird bird--four"></div>
	            </div>





        </div>
        



    </div>
    </Router>




 
     
    );
  }
}

export default App;