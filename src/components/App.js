import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogBrowser from './HogBrowser'
import Filter from './Filter'
import Sort from './Sort'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
const apiKey = 'rOAj10Yjtur5XHgJMXoXYcWZgSHJ1G0s'
const url = 'https://api.giphy.com/v1/gifs/search?api_key=rOAj10Yjtur5XHgJMXoXYcWZgSHJ1G0s&q=hogs&limit=25&offset=0&rating=G&lang=en'

class App extends Component {

	constructor() {
		super()
		this.state = {
			clickedHogs:[],
			hiddenHogs: [],
			filters: 'all',
			sort_by: 'default'
		}
	}

	// componentDidMount(){
	// 	this.fetchGifs()
	// }

	addGifs = (gifs) =>{
		hogs.forEach(hog => hog.gif = gifs.data[hogs.indexOf(hog)].url)
	}

	fetchGifs(){
		fetch(url, {
			headers: {
				'Content-Type': 'application/json'						},
			method: 'get'
		}).then(res=>res.json()).then(json=> this.addGifs(json))

		
	}

	onClickHog = (hogName) => {
		this.setState({
			clickedHogs: [...this.state.clickedHogs, hogName]
		})
	}

	fetchHogs = () => {
		let toDisplay = null
		if (this.state.filters==='all'){
			toDisplay = hogs
		}else if (this.state.filters==='greased') {
			toDisplay = hogs.filter(hog => hog.greased)
		} else {
			toDisplay = hogs.filter(hog => !hog.greased)
		}
		
		if (this.state.sort_by === 'name'){
			toDisplay = toDisplay.sort((a,b) => a.name.localeCompare(b.name))
		}else if (this.state.sort_by === 'weight'){
			toDisplay = toDisplay.sort((a,b) => b[weight] - a[weight])
		}

		return toDisplay.filter(hog => !this.state.hiddenHogs.includes(hog))

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

	hideHog = (hog) => {
		this.setState({
			hiddenHogs: [...this.state.hiddenHogs, hog]
		})
	}




	render() {

		return (
		  <div className="App">
		      < Nav /><br/><br/>
		      Filter: <Filter setHogFilter={this.setHogFilter}/>
		      Sort: <Sort setHogSort={this.setHogSort}/><br/><br/><br/>
		      <HogBrowser hogs={this.fetchHogs()} onClickHog={this.onClickHog} clickedHogs={this.state.clickedHogs} onHideHog={this.hideHog}/>
		  </div>
		)
	}
}

export default App;
