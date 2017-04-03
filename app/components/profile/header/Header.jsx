import React, { PropTypes } from 'react'

import '../../../static/styles/components/profile/header'

class Header extends React.Component {
	render() {
		return (
			<div className='artist-header'>
				<div className='artist-header-image'>
					<div></div>
				</div>

				<div className='artist-header-info'>
					<h1>Plain Jane</h1>
					<p className='details'>Alternative Metal Slosh/Tractor Sounds</p>

					<p>Known for her ridiculous antics and catchy, metalic tractor beats Jane is anything but plain. What started as a hobby in childhood would soon take her all over the world in search of an opportunity to share her nails-on-chalkboard esque voice which has quickly become the voice of a generation and a bane to all those who forget to bring their earplugs </p>

				</div>
			</div>
		);
	}
} 

export default Header