import React, { Suspense } from 'react';

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { GlobalStyles } from 'utilities/styles/global.styles';

const SignInPage = React.lazy(() => import('pages/auth/sign-in-page.component'));

const SignUpPage = React.lazy(() => import('pages/auth/sign-up-page.component'));

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path='/' component={SignInPage} />
					<Route exact path='/register' component={SignUpPage} />
				</Switch>
			</Suspense>
		</Router>
	);
}

export default App;
