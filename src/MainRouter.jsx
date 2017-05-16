import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Map from './Map';
import Village from './Village';

const MainRouter = () => {
	return (
		<Router>
			<div>
				<div>Hello! This is the beginning.</div>
				<ul className="menu">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/map">Map</Link>
					</li>
					<li>
						<Link to="/village">Village</Link>
					</li>
				</ul>

				<Route exact path="/" component={Home} />
				<Route path="/map" component={Map} />
				<Route path="/village" component={Village} />
			</div>
		</Router>
	)
}

export default MainRouter;