import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
import Home from '../routes/home';
import Profile from '../routes/profile';
import Movies from '../routes/movies';
import Directors from '../routes/directors';

// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Movies path="/movies" />
					<Directors path="/directors" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
				<Footer />
			</div>
		);
	}
}
