import React from 'react'
import Wavesurfer from 'react-wavesurfer'

import '../../../static/styles/components/profile/player'
import Track from './Track'


class Player extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			playing: false,
			song: null,
			pos: 0
		}

		this.handlePosChange = this.handlePosChange.bind(this);
	}

	handlePosChange(e) {
		this.setState({
			pos: e.originalArgs[0]
		})
	}

	togglePlay(item) {
		this.setState({
			playing: !this.state.playing,
			song: item.songPath
		});
	}

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
						{this.props.tracks.map(track =>
							<Track 
								key={track.num} 
								num={track.num} 
								name={track.name}
								songPath={track.songPath} 
								album={track.album} 
								time={track.time}
								isPlaying={this.state.playing}
								selectedSong={this.state.song} 
								handleTogglePlay={this.togglePlay.bind(this, track)}
							/>
						)}
					</div>
				</div>

				<Wavesurfer
					audioFile={this.state.song}
					pos={this.state.pos}
					onPosChange={this.handlePosChange}
					playing={this.state.playing}
				/>
			</div>
		);
	}
}

export default Player