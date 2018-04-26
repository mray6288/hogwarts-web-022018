import React from 'react'


const Hog = (props) => {

	let clickDetails = () => {
		
		props.onClickHog(props.hog.name)
	}

	let clickHide = () => {
		props.onHideHog(props.hog)
	}

	let details = () => {
		return (
			<div className='details'>
			<p>Specialty: {props.hog.specialty}</p>
			<p>Greased: {props.hog.greased ? 'Yes' : 'No'}</p>
			<p>Random Weight Thing: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
			<p>Highest Medal: {props.hog['highest medal achieved']}</p>
			</div>
			)
	} 
	
	let fileName = props.hog.name.toLowerCase().replace(/ /g, '_')
	return (
		<div className='ui four wide column'>
			<div className='ui card'>
				<div className='image'>
					<img className='image' src={require(`../hog-imgs/${fileName}.jpg`)} alt={props.hog.name}/><br/>
				</div>
				<h1 className='header'>{props.hog.name}</h1>
				
				<div className='description'>
					<button onClick={clickDetails}>See More</button>
					<button onClick={clickHide}>Hide Hog</button>
					{props.isClicked && details()}
				</div>
			</div>
		</div>
	)

}

export default Hog
