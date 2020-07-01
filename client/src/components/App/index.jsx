import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
} from 'react-router-dom';
import Admin from '../Admin';
import Main from '../Main';

export default () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/main'>Main Page</Link>
						</li>
						<li>
							<Link to='/admin'>Admin Page</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/main' component={Main} />
					<Route path='/admin' component={Admin} />
					<Redirect to='/main' />
				</Switch>
			</div>
		</Router>
	);
};
