import React, { PropTypes } from 'react'

class Header extends React.Component {
	render() {
		return (
			<div className='artist-header'>
				<div className='artist-header-image'>
					<img>
				</div>

				<div className='artist-header-info'>
					<h1>Name</h1>
					<p className='details'>Genre</p>

					<p>About the artist and some other stuff and goodies</p>

				</div>
			</div>
		);
	}
} 

export default Header