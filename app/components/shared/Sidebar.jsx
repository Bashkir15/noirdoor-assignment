import React, { PropTypes } from 'react'

class Sidebar extends React.Component {
	render() {
		return (
			<div className='sidebar'>
				<div className='sidebar-header'>
					<p>Icon</p>
				</div>

				<div className='sidebar-list'>
					<ul>
						<li>Icon</li>
						<li>Icon</li>
						<li>Icon</li>
						<li>Icon</li>
						<li>Icon</li>
					</ul>
				</div>

				<div className='sidebar-footer'>
					<ul>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidebar;