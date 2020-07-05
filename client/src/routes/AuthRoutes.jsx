import React from 'react';
import Admin from '@src/components/Admin';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PageLayout } from '@src/containers/Common';

export const AuthRoutes = () => {
	return (
		<PageLayout>
			<Switch>
				<Route exact path={'/admin'}>
					<Admin />
				</Route>
				<Redirect to={'/admin'} />
			</Switch>
		</PageLayout>
	);
};
