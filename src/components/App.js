import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogBrowser from './HogBrowser'
import Filter from './Filter'
import Sort from './Sort'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {

	constructor() {
		super()
		this.state = {
			clickedHogs:[],
			filters: 'all',
			sort_by: 'default'
		}
	}

	onClickHog = (hogName) => {
		this.setState({
			clickedHogs: [...this.state.clickedHogs, hogName]
		})
	}

	fetchHogs = () => {
		let toDisplay = hogs
		if (this.state.filters==='greased') {
			toDisplay = hogs.filter(hog => hog.greased)
		} else {
			toDisplay = hogs.filter(hog => !hog.greased)
		}
		
		if (this.state.sort_by === 'name'){
			toDisplay = toDisplay.sort((a,b) => a.name.localeCompare(b.name))
		}else if (this.state.sort_by === 'weight'){
			toDisplay = toDisplay.sort((a,b) => a[weight].localeCompare(b[weight]))
		}

		return toDisplay

	}

	setHogFilter = (filter) => {
		this.setState({
			filters: filter
		})
	}



	setHogSort = (sort) => {
		this.setState({
			sort_by: sort
		})
	}



	render() {

		return (
		  <div className="App">
		      < Nav /><br/><br/>
		      Filter: <Filter setHogFilter={this.setHogFilter}/>
		      Sort: <Sort setHogSort={this.setHogSort}/>
		      <HogBrowser hogs={this.fetchHogs()} onClickHog={this.onClickHog} clickedHogs={this.state.clickedHogs}/>
		  </div>
		)
	}
}

export default App;
