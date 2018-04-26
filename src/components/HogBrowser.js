import React from 'react'

import Hog from './Hog'

export default class HogBrowser extends React.Component {
	render() {
		console.log(this.props.hogs)
		let allHogs = this.props.hogs.map( hog => {
			return <Hog hog={hog}
						onClickHog={this.props.onClickHog}
						isClicked={this.props.clickedHogs.includes(hog.name)}/>
		})
		return (
			<div className='ui grid container'>
				{allHogs}
			</div>
		)
	}
}
