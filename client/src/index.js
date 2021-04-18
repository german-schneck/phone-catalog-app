/**
 * Phone Application Catalog
 * @author Germán D. Schneck
 */

// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Utils
import createStore from './redux/createStore';
import reportWebVitals from './reportWebVitals';

// Routes
import routes from './config/routes';

// CSS Static Files
import './index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Providers
import UIProvider from './shared/providers/UIProvider';

function App() {
  return (
		<Router>
			<UIProvider>
				{/* Router */}
				<Switch>
					{(routes || []).map((route, index) => (
						<Route
							key={`--app-router-index-${index.toString()}`}
							path={route.path}
							exact={route.exact ?? true}
							component={route.component ?? (() => null)}
						/>
					))}
				</Switch>
			</UIProvider>
		</Router>
  );
}

ReactDOM.render(
	<React.StrictMode>
		<ReduxProvider store={createStore}>
			<App />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
