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

// Components
import Header from './shared/components/navigation/Header';

function App() {
  return (
		<Router>
			{/* Router */}
			<Header />
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
