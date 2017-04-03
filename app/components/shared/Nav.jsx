import React, { PropTypes } from 'react'

import '../../static/styles/shared/components/nav.sass'

class Nav extends React.Component {

	render() {
		

		return (
			<nav className='nav'>
				<div className='nav-left'>
					<div className='nav-item'>
						<a>Reccommended</a>
					</div>

					<div className='nav-item'>
						<a>New Releases</a>
					</div>

					<div className='nav-item'>
						<a>Top Artists</a>
					</div>

					<div className='nav-item'>
						<a>Genres</a>
					</div>

					<div className='nav-item'>
						<a>Near You</a>
					</div>
				</div>

				<div className='nav-right'>
					<div className='nav-item nav-search'>
						<button>
							<span className='icon-search'></span>
						</button>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;