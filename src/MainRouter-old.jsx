import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Map from './Map';
import Village from './Village';


const MainRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/map">The Map</Link></li>
        <li><Link to="/village">The Village</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/map" component={Map}/>
      <Route path="/village" component={Village}/>
    </div>
  </Router>
)
export default MainRouter
