import React from 'react'

import '../../../static/styles/components/profile/player'
import Track from './Track'


const tracks = [
	{
		num: '1',
		name: 'Test',
		album: 'Stuff',
		time: '4:30'
	},

	{
		num: '2',
		name: 'Test2',
		album: 'Blah',
		time: '2:30'
	},

	{
		num: '3',
		name: 'Test3',
		album: 'Grr',
		time: '1:13'
	}
];

class Player extends React.Component {
	render() {
		return (
			<div className='player-container'>
				<h2>Top Tracks</h2>

				<div className='track-list-container'>
					<div className='track-list-headers'>
						<div>
							<p>#</p>
						</div>

						<div>
							<p>Song</p>
						</div>

						<div>
							<p>Album</p>
						</div>

						<div>
							<p>Time</p>
						</div>
					</div>

					<div className='track-list-body'>
						{tracks.map(track =>
							<Track key={track.num} num={track.num} name={track.name} album={track.album} time={track.time} />
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Player