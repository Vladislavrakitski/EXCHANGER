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
import Card from '../Card';
import { Routes } from '@src/routes';

export default () => {
	return (
		<Routes>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to='/'>Main Page</Link>
							</li>
							<li>
								<Link to='/admin'>Admin Page</Link>
							</li>
							<li>
								<Link to='/card'>Card Page</Link>
							</li>
						</ul>
					</nav>

					<Switch>
						<Route exact path='/'>
							<Main />
						</Route>
						<Route exact path='/admin'>
							<Admin />
						</Route>
						<Route exact path='/card'>
							<Card />
						</Route>
						<Redirect to='/' />
					</Switch>
				</div>
			</Router>
		</Routes>
	);
};
