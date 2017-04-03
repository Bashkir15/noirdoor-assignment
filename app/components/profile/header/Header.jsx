import React, { PropTypes } from 'react'

import '../../../static/styles/components/profile/header'

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		if (this.props.loading) {
			return (
				<div>Loading</div>
			);
		} else {
			const artistName = this.props.artist.name.split('-').join(' ');
			const artistGenre = this.props.artist.genres.join('/');

			return (
				<div className='artist-header'>
					<div className='artist-header-image'>
						<div>
						</div>
					</div>

					<div className='artist-header-info'>
						<h1>{artistName}</h1>
						<p className='details'>{artistGenre}</p>

						<p>{this.props.artist.bio}</p>
					</div>
				</div>
			)
		}
	}
} 

export default Header