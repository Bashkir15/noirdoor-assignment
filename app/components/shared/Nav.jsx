import React, { PropTypes } from 'react'

class Nav extends React.Component {
	render() {
		// add state for sidenav later

		return (
			<nav className='nav'>
				<div className='nav-left'>
					<div className='nav-item'>
						<a>Link</a>
					</div>

					<div className='nav-item'>
						<a>Link</a>
					</div>

					<div className='nav-item'>
						<a>Link</a>
					</div>

					<div className='nav-item'>
						<a>Link</a>
					</div>
				</div>

				<div className='nav-right'>
					<div className='nav-item nav-search'>
						<button>Icon</button>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;