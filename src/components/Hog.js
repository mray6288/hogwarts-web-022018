import React from 'react'


const Hog = (props) => {

	let clickDetails = () => {
		
		props.onClickHog(props.hog.name)
	}

	let details = () => {
		return (
			<div className='details'>
			<p>Specialty: {props.hog.specialty}</p>
			<p>Greased: {props.hog.greased ? 'Yes' : 'No'}</p>
			<p>Random Thing: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
			<p>Highest Medal: {props.hog['highest medal achieved']}</p>
			</div>
			)
	} 
	
	let fileName = props.hog.name.toLowerCase().replace(/ /g, '_')
	return (
		<div className='ui eight wide column'>
			<h1>{props.hog.name}</h1>
			<img src={require(`../hog-imgs/${fileName}.jpg`)} alt={props.hog.name}/><br/>
			<button onClick={clickDetails}>See More</button>
			{props.isClicked && details()}

		</div>
	)

}

export default Hog
