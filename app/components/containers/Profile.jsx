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
					name: 'Billies Bounce',
					album: 'Giblet Gravy',
					time: '4:30',
					//location: 'app/static/music/DIAD1116.mp3'
					songPath: 'https://s3.us-east-2.amazonaws.com/noirdoor-test/billiesbounce.mp3'
				},

				{
					num: '2',
					name: 'Constellation',
					album: 'Memorial, Vol. 1',
					time: '2:30',
					songPath: 'https://s3.us-east-2.amazonaws.com/noirdoor-test/constellation.mp3'
				},

				{
					num: '3',
					name: 'Summertime',
					album: 'Charlie Parker with String',
					time: '1:13',
					songPath: 'https://s3.us-east-2.amazonaws.com/noirdoor-test/summertime.mp3'
				},

				{
					num: '4',
					name: 'Thriving on a Riff',
					album: 'Ornithology',
					time: 'adfasf',
					songPath: 'https://s3.us-east-2.amazonaws.com/noirdoor-test/thrivingonariff.mp3'
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