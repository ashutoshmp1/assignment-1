import React, { Component } from 'react'
import Index from './index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" exact component={Index} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;