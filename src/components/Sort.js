import React from 'react'

const Sort = (props) => {

	let sortChange = (event) => {
		props.setHogSort(event.target.value)
	}

	return (
		<select defaultValue='all' onChange={sortChange}>
			<option value="default">Default</option>
			<option value="name">Name</option>
			<option value="weight">Random Weight Thing</option>
		</select>
	)
}

export default Sort