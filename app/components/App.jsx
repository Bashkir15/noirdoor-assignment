import React, { PropTypes } from 'react'

import '../static/styles/shared/config/config'

import Nav from './shared/Nav'

class App extends React.Component {
	render() {
		return (
			<div className='app-container'>
				<Nav />
			</div>
		);
	}
}

export default App;