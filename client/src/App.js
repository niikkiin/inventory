import React, { Suspense, useEffect } from 'react';

// routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'routing/private-route.routing';

// global styles
import { GlobalStyles } from 'utilities/styles/global.styles';


// redux
import { Provider } from 'react-redux';
import store from 'store/store';
import { loadUser } from 'store/actions/auth.actions';
import setAuthToken from 'utilities/auth/set-auth-token.utilities';

// components
import Spinner from 'components/spinner/spinner.component';

// lazy components
const SignInPage = React.lazy(() => import('pages/auth/sign-in-page.component'));
const SignUpPage = React.lazy(() => import('pages/auth/sign-up-page.component'));
const DashboardPage = React.lazy(() => import('pages/dashboard/dashboard.component'));
const CreateProfilePage = React.lazy(() => import('pages/profile/create-profile.component'));
const UpdateProfilePage = React.lazy(() => import('pages/profile/update-profile.component'));
const CreateNotesPage = React.lazy(() => import('pages/profile/create-notes.component'));
const ViewNotesPage = React.lazy(() => import('pages/profile/view-notes.component'));
const ViewItemsPage = React.lazy(() => import('pages/items/view-items.component'));
const AddItemPage = React.lazy(() => import('pages/items/add-item.component'));

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
				<Suspense fallback={<Spinner />}>
					<Switch>
						<Route exact path='/' component={SignInPage} />
						<Route exact path='/register' component={SignUpPage} />
						<PrivateRoute exact path='/dashboard' component={DashboardPage} />

						{/* PROFILE */}
						<PrivateRoute exact path='/create-profile' component={CreateProfilePage} />
						<PrivateRoute exact path='/edit-profile' component={UpdateProfilePage} />
						<PrivateRoute exact path='/create-note' component={CreateNotesPage} />
						<PrivateRoute exact path='/view-notes' component={ViewNotesPage} />

						{/* ITEMS */}
						<PrivateRoute exact path='/items' component={ViewItemsPage} />
						<PrivateRoute exact path='/items/add' component={AddItemPage} />

					</Switch>
				</Suspense>
			</Router>
		</Provider>
	);
}

export default App;
