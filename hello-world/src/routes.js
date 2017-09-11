// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Page404 from './components/Page404';
import App from './components/App';

const AppRoutes = () =>
	<App>
		<Switch>
			<Route exact path="/about" component={AboutUs} />
			<Route exact path="/contact" component={ContactUs} />
			<Route exact path="/blog" component={Blog} />
			<Route exact path="/" component={Home} />
			<Route component={Page404} />
		</Switch>
	</App>;

export default AppRoutes;