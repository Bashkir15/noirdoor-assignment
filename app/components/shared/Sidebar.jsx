import React, { PropTypes } from 'react'

import '../../static/styles/shared/components/sidebar'

class Sidebar extends React.Component {
	render() {
		return (
			<div className='sidebar'>
				<div className='sidebar-header'>
					<span className='icon-headset'></span>
				</div>

				<div className='sidebar-list'>
					<ul>
						<li>
							<span className='icon-person_outline'></span>
						</li>

						<li>
							<span className='icon-mail_outline'></span>
						</li>

						<li>
							<span className='icon-star_border'></span>
						</li>

						<li>
							<span className='icon-notifications_none'></span>
						</li>

						<li>
							<span className='icon-favorite_border'></span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidebar;