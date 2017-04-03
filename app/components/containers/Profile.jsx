import React, { propTypes } from 'react'

import Header from '../profile/header/Header'
import Player from '../profile/player/Player'

class Home extends React.Component {
	constructor(props) {
		super(props);

		// when have time, move all this to stores and use Redux, this is messy


		this.state = {
			tracks: [
				{
					num: '1',
					name: 'Test',
					album: 'Stuff',
					time: '4:30',
					//location: 'app/static/music/DIAD1116.mp3'
					songPath: 'http://wavesurfer-js.org/example/media/demo.mp3'
				},

				{
					num: '2',
					name: 'Test2',
					album: 'Blah',
					time: '2:30',
					songPath: 'app/static/music/MER11082p.mp3'
				},

				{
					num: '3',
					name: 'Test3',
					album: 'Grr',
					time: '1:13',
					songPath: 'app/static/music/MER11082p.mp3'
				}		
			],

		};

	}


	render() {
		const {tracks, player} = this.state;

		return (
			<div className='home-container'>
				<Header />
				<Player tracks={tracks} />
			</div>
		);
	}
}

export default Home