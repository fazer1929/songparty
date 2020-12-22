import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import RoomCreatePage from "./RoomCreatePage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/join" component={RoomJoinPage} />
					<Route path="/create" component={RoomCreatePage} />
					<Route exact={true} path="/">
						<p>Home Page Route</p>
					</Route>
				</Switch>
			</Router>
		);
	}
}
