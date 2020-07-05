import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { PageLayout } from '@src/containers/Common';
import Main from '@src/components/Main';

export const UnAuthRoutes = () => {
	return (
		<PageLayout>
			<Switch>
				<Route exact path={'/'}>
					<Main />
				</Route>
				<Redirect to={'/'} />
			</Switch>
		</PageLayout>
	);
};
