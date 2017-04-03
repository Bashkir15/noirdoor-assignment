import React, { propTypes } from 'react'
import axios from 'axios'

import Header from '../profile/header/Header'
import Player from '../profile/player/Player'

class Home extends React.Component {
	constructor(props) {
		super(props);

		// when have time, move all this to stores and use Redux, this is messy


		this.state = {
			artist: null,
			loading: true

		};

	}

	componentDidMount() {
		axios.get('artist/Plain-Jane')
		.then((response) => {
			this.setState({
				artist: response.data,
				tracks: response.data.songs,
				loading: false
			});
		});
	}


	render() {

		return (
			<div className='home-container'>
				<Header artist={this.state.artist} loading={this.state.loading}/>
				<Player tracks={this.state.tracks} loading={this.state.loading}/>
			</div>
		);
	}
}

export default Home