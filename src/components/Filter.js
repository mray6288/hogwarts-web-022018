import React from 'react'

const Filter = (props) => {

	let filterChange = (event) => {
		props.setHogFilter(event.target.value)
	}

	return (
		<select defaultValue='all' onChange={filterChange}>
			<option value="all">All</option>
			<option value="greased">Greased</option>
			<option value="not-greased">Not Greased</option>
		</select>
	)
}

export default Filter