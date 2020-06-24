import React, { Suspense, useEffect } from 'react';

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from 'utilities/styles/global.styles';


// redux
import { Provider } from 'react-redux';
import store from 'store/store';
import { loadUser } from 'store/actions/auth.actions';
import setAuthToken from 'utilities/auth/set-auth-token.utilities';

const SignInPage = React.lazy(() => import('pages/auth/sign-in-page.component'));
const SignUpPage = React.lazy(() => import('pages/auth/sign-up-page.component'));
const DashboardPage = React.lazy(() => import('pages/dashboard/dashboard.component'));

if(localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {

	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<GlobalStyles />
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path='/' component={SignInPage} />
						<Route exact path='/register' component={SignUpPage} />
						<Route exact path='/dashboard' component={DashboardPage} />
					</Switch>
				</Suspense>
			</Router>
		</Provider>
	);
}

export default App;
