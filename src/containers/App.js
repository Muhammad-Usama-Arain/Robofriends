import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state ={
			robots : [],
			searchString : ''
		}
	}
	
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then( response => response.json() )
		.then( users => this.setState({ robots : users }) );
	}

	onSearchChange = (event) => {
		this.setState({ searchString : event.target.value })
	}

	render(){
			const {robots, searchString } = this.state;
			if(!robots.length){
				return <h1 className="logo f2">Loading...</h1>
			}else{
				const filteredRobots = robots.filter(robot=>{
				return robot.name.toLowerCase().includes(searchString.toLowerCase());
				})
				return (
					<div className="tc">
						<h1 className="f1 ttu logo">Robofriends</h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filteredRobots} />
						</Scroll>
					</div>
				);
			}
	}
}

export default App;