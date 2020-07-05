import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PageLayout } from '@src/containers/Common';

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<PageLayout></PageLayout>
			</Switch>
		</Router>
	);
};
