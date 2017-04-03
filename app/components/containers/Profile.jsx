import React, { propTypes } from 'react'

import Header from '../profile/header/Header'
import Player from '../profile/player/Player'

class Home extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<Header />
				<Player />
			</div>
		);
	}
}

export default Home