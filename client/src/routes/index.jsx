import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { UnAuthRoutes } from './UnAuthRoutes';

export const Routes = () => {
	const isAuthorized = true;
	return (
		<Router>
			<Switch>{isAuthorized ? <AuthRoutes /> : <UnAuthRoutes />}</Switch>
		</Router>
	);
};
