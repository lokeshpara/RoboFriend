import React, {Component} from "react";
import CardList from "../component/cardList";
import SearchBox from "../component/searchBox.js";
import "./App.css";
import Scroll from "../component/scroll.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robot:[],
			searchfield:""
		}
	}

componentDidMount() {
	fetch(`https://jsonplaceholder.typicode.com/users`)
	.then(response => response.json())
	.then(users => this.setState({robot : users}))
}

onSearchChange = (event) => {
	this.setState({searchfield: event.target.value});
};

	render() {
		const {robot,searchfield} = this.state;
		const filteredRobot = robot.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		return !robot.length?
		<h1 className="tc">Loading</h1> :
		(
			<div className="tc">
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobot}/>\
			</Scroll>
			</div>
		);
	}
}

export default App;