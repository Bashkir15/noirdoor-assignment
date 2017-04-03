import React, { PropTypes } from 'react'

import '../static/styles/shared/config/config'

import Nav from './shared/Nav'
import Sidebar from './shared/Sidebar'

import Profile from './containers/Profile'


class App extends React.Component {

	render() {
		return (
			<div className='app-container'>
				<Nav />
				<Sidebar />

				<div className='view-container'>
					<Profile />
				</div>

			</div>
		);
	}
}

export default App;