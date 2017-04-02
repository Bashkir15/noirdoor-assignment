import React, { PropTypes } from 'react'

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