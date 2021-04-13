import React from "react";
import { Route, Switch,Redirect} from "react-router";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./components/Navbar"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
const App=()=>{
return(
    <>
<Navbar/>
<br/>
<br/>
<Switch>
<Route exact path="/" component={Home}/> 
<Route exact path="/service" component={Service}/> 
<Route exact path="/contact" component={Contact}/>
<Redirect to="/"/>
</Switch>
</>
)
}
export default App;